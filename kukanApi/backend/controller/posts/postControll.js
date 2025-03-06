const db = require("../../config/db");

const getAllPosts = async (req, res) => {
  try {
    const quary = "SELECT * FROM posts";
    const [result] = await db.execute(quary);

    // Check if data is found
    if (!result || result.length == 0) {
      return res.status(400).json({ message: "No posts found." });
    }

    res.status(200).json({ message: "poets are found", result });
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

const getPostById = async (req, res) => {
  try {
    let { id } = req.params;

    // Validate id
    if (!id || isNaN(id)) {
      return res.status(400).json({ message: "A valid id must be provided." });
    }

    let query = "SELECT * FROM posts WHERE id = ?";
    const [result] = await db.execute(query, [id]);

    // Check if data is found
    if (!result || result.length === 0) {
      return res.status(404).json({ message: "Post not found." });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

const getLimitedPosts = async (req, res) => {
  try {
    let { limit } = req.params;

    // Validate limit
    if (!limit || isNaN(limit) || Number(limit) <= 0) {
      return res
        .status(400)
        .json({ message: "A valid positive limit must be provided." });
    }

    const query = "SELECT * FROM posts LIMIT  ?";
    const [result] = await db.execute(query, [Number(limit)]);

    // Check if posts are found
    if (!result || result.length === 0) {
      return res.status(404).json({ message: "No posts found." });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

const searchPosts = async (req, res) => {
  try {
    let { num } = req.params;

    // Validate search value
    if (!num) {
      return res
        .status(400)
        .json({ message: "Search value must be provided." });
    }

    const quary = "SELECT * FROM posts WHERE views >  ?";
    const [result] = await db.execute(quary, [num]);

    // Check if any posts match the search query
    if (!result || result.length === 0) {
      return res
        .status(404)
        .json({ message: "No posts found matching the search query." });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

const updatePosts = async (req, res) => {
  try {
    const { id, title, body, author, views, userId } = req.body;

    // Validate input
    if (!id || !title || !body || !author || !views || !userId) {
      return res.status(400).json({ message: "All fields must be provided" });
    }

    // Find the post in the database
    const query = "SELECT * FROM posts WHERE id = ?";
    const [result] = await db.execute(query, [id]);

    // Check if the post is found
    if (!result || result.length === 0) {
      return res.status(404).json({ message: "Post not updated" });
    }

    // for the process of updating we don`t update the actual data but  we instade send new data and old data together
    const newuserData = {
      id: id,
      title: title,
      body: body,
      author: author,
      views: views,
      userId: userId,
    };
    const isUpdated = [...result];
    res.status(200).json({
      message: "quote updated successfully",
      newpost: newuserData,
      updatedpost: isUpdated,
    });
    return;

    // Update the post if found
    let data = [id, title, body, author, views, userId];
    const updateQuery =
      "UPDATE posts SET id =? title = ?, body = ?, author = ?, views = ?, userId = ? WHERE id = ?";
    let [updateResult] = await db.execute(updatequary, data);

    // Check if the post was updated
    if (updateResult.affectedRows === 0) {
      return res.status(400).json({ message: "Post was not updated" });
    }

    res
      .status(200)
      .json({ message: "Post updated successfully", updateResult });
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};
const deletePosts = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!id) {
      return res
        .status(400)
        .json({ message: "ID must be provided to delete the post" });
    }

    const checkDlete = "SELECT * FROM posts WHERE id = ?";
    const [checkDleteResult] = await db.execute(checkDlete, [id]);

    // check if  data found server send as deleted dat because we don`t want the user delete the actual data
    if (checkDleteResult) {
      res
        .status(200)
        .json({ message: "user was delete successfully", checkDleteResult });
      return;
    }
    return;
    const deleteQuery = "DELETE FROM postes WHERE id = ?";
    const [deleteResult] = await db.execute(deleteQuery, [id]);

    // Check if the post was deleted
    if (deleteResult.affectedRows === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};
const addnewPost = async (req, res) => {
  try {
    const { id, title, author, body, views, userId } = req.body;

    // Validate input
    if (!id || !title || !body || !author || !views || !userId) {
      return res.status(400).json({ message: "All fields must be provided" });
    }

    // Find the post in the database
    const query = "SELECT * FROM posts WHERE id = ?";
    const [result] = await db.execute(query, [id]);

    // Check if the post is found
    if (!result || result.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    // add new posts
    let data = [title, body, author, views, userId];
    let addpostsquery = `INSERT INTO posts(title, body, author, views, userId) VALUES(?,?,?,?,?)`;

    const [addqueryResult] = await db.execute(addpostsquery, data);

    // Check if the post was added
    if (addpostsquery.affectedRows === 0) {
      return res.status(400).json({ message: "Post was not added" });
    }

    res
      .status(200)
      .json({ message: "adding new postes was successfully", addqueryResult });
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};
module.exports = {
  getAllPosts,
  getPostById,
  getLimitedPosts,
  searchPosts,
  deletePosts,
  updatePosts,
  addnewPost,
};
