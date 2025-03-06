const db = require("../../config/db");
//  add
const getallproduct = async (req, res) => {
  try {
    // get all data from database
    const quary = "SELECT * FROM products";
    let [result] = await db.execute(quary);

    // check if the data was found
    if (!result || result.length == 0) {
      return res.status(404).json({ message: "product was not found" });
    }

    // send the product if found
    res.status(200).json({ message: "product was found", result });
  } catch (error) {
    console.log("interal server error", error);
    res.status(500).json({ message: "interal server Errror", error });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    let { id } = req.params;
    // validate id
    if (!id) {
      return res.status(400).json({ message: "ID must be provided" });
    }

    const quary = "SELECT * FROM products WHERE id = ?";
    const [result] = await db.execute(quary, [id]);

    // check if the product found
    if (!result || result.length == 0) {
      return res
        .status(404)
        .json({ message: `product was not found with the id of ${id}` });
    }

    // send the product if the found
    res.status(200).json({ message: "product was found", result });
  } catch (error) {
    console.log("interal server error", error);
    res.status(500).json({ message: "interal server Errror", error });
  }
};

const getproductByCategory = async (req, res) => {
  try {
    let { categoryName } = req.params;

    //validate the categoryName
    if (!categoryName) {
      return res
        .status(400)
        .json({ message: "categoryName name must be provided" });
    }

    // search the product by its categoryName
    const quary = "SELECT * FROM products WHERE category = ?";
    const [result] = await db.execute(quary, [categoryName]);

    // check is the product found with that categoryName
    if (!result || result.length === 0) {
      return res.status(404).json({
        message: `product was not found with the categoryName of ${categoryName}`,
      });
    }

    // send the product  if the found with the categoryName
    res.status(200).json({ message: "product was found", result });
  } catch (error) {
    console.log("interal server error", error);
    res.status(500).json({ message: "interal server Errror", error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const {
      id,
      title,
      price,
      description,
      category,
      image,
      rating_rate,
      rating_count,
    } = req.body;

    // Validate input
    if (
      !id ||
      !title ||
      !price ||
      !description ||
      !category ||
      !image ||
      !rating_rate ||
      !rating_count
    ) {
      return res.status(400).json({ message: "All fields must be provided" });
    }

    // Find the post in the database
    const query = "SELECT * FROM products WHERE id = ?";
    const [result] = await db.execute(query, [id]);

    // Check if the post is found
    if (!result || result.length === 0) {
      return res.status(404).json({ message: "product  not updated" });
    }

    // for the process of updating we don`t update the actual data but  we instade send new data and old data together
    const newuserData = {
      id: id,
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
      rating_rate: rating_rate,
      rating_count: rating_count,
    };
    const isUpdated = [...result];
    res.status(200).json({
      message: "product updated successfully",
      newuserData: newuserData,
      olduserData: isUpdated,
    });

    // after sending the new and old data we won`t the code to run and update the actual data so we are going to return and stop the code from running
    return;

    // Update the post if found
    let data = [id, title, price, description, category, image];
    const updatequary =
      "UPDATE posts SET id = ? title = ?, price = ?, description = ?, category = ?, image = ? WHERE id = ?";
    let [updateResult] = await db.execute(updatequary, data);

    // Check if the post was updated
    if (updateResult.affectedRows === 0) {
      return res.status(400).json({ message: "Post was not updated" });
    }
    res
      .status(200)
      .json({ message: "product updated successfully", updateResult });
  } catch (error) {
    console.log("interal server error", error);
    res.status(500).json({ message: "interal server Errror", error });
  }
};
const deleteProduct = async (req, res) => {
  try {
    let { id } = req.params;

    // validate the id
    if (!id) {
      return res.status(400).json({ message: "ID must be provided" });
    }

    const checkDlete = "SELECT * FROM users WHERE id = ?";
    const [checkDleteResult] = await db.execute(checkDlete, [id]);

    // check if  data found server send as deleted dat because we don`t want the user delete the actual data
    if (checkDleteResult) {
      return res
        .status(200)
        .json({ message: "user was delete successfully", checkDleteResult });
    }
    return;

    const quary = "DELETE * FROM products WHERE id =?";
    const [result] = await db.execute(quary, id);

    ///check if the produc was deleted
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "product was not deleted" });
    }

    // if the data wad delted send back the deleted data abd message
    res
      .status(200)
      .json({ message: "product was deleted successfully", result });
  } catch (error) {
    console.log("internal server Error", error);
    res.status(500).json("internal server error", error);
  }
};

module.exports = {
  getallproduct,
  getSingleProduct,
  getproductByCategory,
  updateProduct,
  deleteProduct,
};
