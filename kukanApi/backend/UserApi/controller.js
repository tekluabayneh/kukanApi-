const CryptoJS = require("crypto-js");
const bcrypt = require("bcryptjs");

const db = require("../config/db");
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate  input
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email and password must be provided" });
    }

    const checkuserexistQuery = "SELECT * FROM user WHERE email = ?";
    const [checkuserexistQueryResult] = await db.execute(checkuserexistQuery, [
      email,
    ]);
    // console.log(checkuserexistQueryResult)
    // Compare the plain password with the hashed password stored in the database
    const comparePassword = await bcrypt.compare(
      password,
      checkuserexistQueryResult[0].password
    );

    if (!comparePassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const apikeyQury = "SELECT * FROM api_keys WHERE id = ?";
    const [apikeyQuryResult] = await db.execute(apikeyQury, [
      checkuserexistQueryResult[0].id,
    ]);
    // console.log(apikeyQuryResult);
    // send back the generated api key for user
    res.status(200).json({
      message: "user login successfully",
      apiKey: apikeyQuryResult[0].api_key,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "internal server error", error });
    throw error;
  }
};

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate  input
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email and password must be provided" });
    }

    const checkuserexistQuery = "SELECT * FROM user WHERE email = ?";
    const [checkuserexistQueryResult] = await db.execute(checkuserexistQuery, [
      email,
    ]);

    // check if the user already exist
    if (checkuserexistQueryResult.length > 0) {
      return res.status(404).json({ message: "user already exist" });
    }

    // register user if the user was not register before
    // Hash the password
    const genSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    const userData = [email, hashedPassword];
    const quary = "INSERT INTO user (email, password) VALUES(?,?)";
    const [result] = await db.execute(quary, userData);

    // Check if the user was inserted successfully
    if (result.affectedRows === 0) {
      return res.status(500).json({ message: "User registration failed" });
    }

    // generate api key
    function generateApiKey() {
      return CryptoJS.lib.WordArray.random(32).toString(CryptoJS.enc.Hex);
    }

    // Retrieve the last inserted ID
    const lastInsertId = result.insertId;
    const resetTime = new Date();
    resetTime.setDate(resetTime.getDate() + 1);
    const apiKey = generateApiKey();

    let data = [lastInsertId, apiKey, resetTime];
    const insertApikey =
      "INSERT INTO api_keys (user_id, api_key, reset_time)VALUES(?,?,?)";
    const [insertApikeyResult] = await db.execute(insertApikey, data);

    // Check if the insertion was successful
    if (insertApikeyResult.affectedRows > 0) {
      console.log("User inserted successfully");
    } else {
      console.log("User insertion failed");
      return;
    }

    // ans send back the generated api key for user
    res
      .status(200)
      .json({ message: "user register successfully", apiKey: apiKey });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "internal server error", error });
    throw error;
  }
};

module.exports = { login, register };
