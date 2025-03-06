const db = require("../../config/db");

const getalluser = async (req, res) => {
  try {
    const query = "SELECT * FROM users";
    const [result] = await db.execute(query);

    // Check if data is found
    if (!result || result.length === 0) {
      return res.status(404).json({ message: "user not found." });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};
const adduser = async (req, res) => {
  try {
    let { firstName, lastName, age, gender, email, phone, username, password } =
      req.body;

    // validate user data
    if (
      !firstName ||
      !lastName ||
      !age ||
      !gender ||
      !email ||
      !phone ||
      !username ||
      !password
    ) {
      return res.status(400).json({ message: "All fields must be provided" });
    }

    const checkQuery = "SELECT * FROM users WHERE email = ?";
    const [checkresult] = await db.execute(checkQuery, [email]);
    console.log(checkresult);

    // validate if the user exist
    if (checkresult.length > 0) {
      return res.status(404).json({ message: "user already exist" });
    }

    let insertQuery =
      "INSERT INTO users(firstName, lastName, age, gender, email ,phone, username, password)VALUES(?,?,?,?,?,?,?,?)";
    const data = [
      firstName,
      lastName,
      age,
      gender,
      email,
      phone,
      username,
      password,
    ];
    const [insertresult] = await db.execute(insertQuery, data);

    res
      .status(200)
      .json({ message: "user was added successfully", insertresult });
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};
const singleuser = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID (check if it's a number and greater than 0)
    if (!id || isNaN(id) || id <= 0) {
      return res.status(400).json({ message: "A valid id must be provided." });
    }

    let query = "SELECT * FROM users WHERE id = ?";
    const [result] = await db.execute(query, [id]);

    // Check if data is found
    if (!result || result.length === 0) {
      return res.status(404).json({ message: "user not found." });
    }

    res.status(200).json({ message: "user was found", result });
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};
const getLimiteduser = async (req, res) => {
  try {
    let { limit } = req.params;

    // Validate limit
    if (!limit || isNaN(limit) || Number(limit) <= 0) {
      return res
        .status(400)
        .json({ message: "A valid positive limit must be provided." });
    }

    const query = "SELECT * FROM users LIMIT  ?";
    const [result] = await db.execute(query, [limit]);

    // Check if posts are found
    if (!result || result.length === 0) {
      return res.status(404).json({ message: "No users found." });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

const deleteuser = async (req, res) => {
  try {
    const { id } = req.params;

    // validate id
    if (!id) {
      return res.status(400).json({ message: "ID must be provided" });
    }

    const checkDlete = "SELECT * FROM users WHERE id = ?";
    const [checkDleteResult] = await db.execute(checkDlete, [id]);

    // check if  data found server send as deleted dat because we don`t want the user delete the actual data
    if (checkDleteResult) {
      res
        .status(200)
        .json({ message: "user was delete successfully", checkDleteResult });
      return;
    }
    return;
    const deleteQuery = "DELETE * FROM users WHERE ID = ?";
    const [deleteresult] = await db.execute(deleteQuery, id);

    // Check if the post was updated
    if (deleteresult.affectedRows === 0) {
      return res.status(404).json({ message: "user was not deleted" });
    }
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

const updateuser = async (req, res) => {
  try {
    let {
      id,
      firstName,
      lastName,
      age,
      gender,
      email,
      phone,
      username,
      password,
    } = req.body;

    // validate the user data
    if (
      !id ||
      !firstName ||
      !lastName ||
      !gender ||
      !email ||
      !age ||
      !phone ||
      !password ||
      !username
    ) {
      return res.status(400).json({ message: "All fields must be provided" });
    }

    // check if the user exist
    let selectQuery = "SELECT * FROM users WHERE id = ?";
    const [selectQueryResult] = await db.execute(selectQuery, [id]);

    // check if the user exist
    if (!selectQueryResult || selectQueryResult.length == 0) {
      return res.status(404).json({ message: "user not found" });
    }

    // for the process of updating we don`t update the actual data but  we instade send new data and old data together
    const newuserData = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      email: email,
      age: age,
      phone: phone,
      password: password,
      username: username,
    };
    const isUpdated = [...selectQueryResult];
    res.status(200).json({
      message: "quote updated successfully",
      newuserData: newuserData,
      olduserData: isUpdated,
    });

    // after sending the new and old data we won`t the code to run and update the actual data so we are going to return and stop the code from running
    return;

    // update the user data if the user found
    const updateQuery =
      "UPDATE users SET id = ? quote =? author =? WHERE id = ?";
    const data = [id, quote, author];
    const [updatequaryResult] = await db.execute(updateQuery, data);

    // Check if the user was updated
    if (updatequaryResult.affectedRows === 0) {
      return res.status(400).json({ message: "user was not updated" });
    }
    res
      .status(200)
      .json({ message: "quote updated successfully", updatequaryResult });
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  getalluser,
  singleuser,
  getLimiteduser,
  deleteuser,
  updateuser,
  adduser,
};
