const db = require("../../config/db");

const allquotes = async (req, res) => {
  try {
    const quary = "SELECT * FROM quotes";
    const [result] = await db.execute(quary);

    // check if the quotes are found
    if (!result || result.length === 0) {
      return res.status(400).json({ message: "quotes was not found" });
    }

    res.status(200).json({ message: "quotes are found", result });
  } catch (error) {
    console.log("internal server Error", error);
    res.status(500).json("internal server error", error);
  }
};
const singlequote = async (req, res) => {
  try {
    let { id } = req.params;

    //validate id
    if (!id) {
      return res.status(400).json({ message: "ID must be provode" });
    }

    const quary = "SELECT * FROM quotes WHERE id = ?";
    const [result] = await db.execute(quary, [id]);

    // check if  the quote found
    if (!result || result.length == 0) {
      return res
        .status(404)
        .json({ message: `quote with the id of ${id} was not found` });
    }

    res
      .status(200)
      .json({ message: `quote ws found with the id of {id}`, result });
  } catch (error) {
    console.log("internal server Error", error);
    res.status(500).json("internal server error", error);
  }
};

const limiteQuote = async (req, res) => {
  try {
    const { limit } = req.params;

    //validate id
    if (!limit) {
      return res
        .status(400)
        .json({ message: "limit number  must be provided" });
    }

    const quary = "SELECT * FROM quotes LIMIT ?";
    const [result] = await db.execute(quary, [limit]);

    // check if the limited quote found
    if (!result || result.length === 0) {
      return res.status(404).json({ message: "quotes are not found" });
    }

    res.status(200).json({ message: "quotes were found", result });
  } catch (error) {
    console.log("internal server Error", error);
    res.status(500).json("internal server error", error);
  }
};
const updatequote = async (req, res) => {
  try {
    let { id, quote, author } = req.body;

    // vlaidate the input
    if (!id || !quote || !author) {
      return res.status(400).json({ message: "all fildes must be provided" });
    }

    const Selectquary = "SELECT * FROM quotes WHERE id = ?";
    const [SelectQuaryResult] = await db.execute(Selectquary, [id]);

    // check if the quote found to be updated
    if (!SelectQuaryResult || SelectQuaryResult.length == 0) {
      return res
        .status(404)
        .json({ message: `quote was not found with the id of ${id}` });
    }

    // for the process of updating we don`t update the actual data but  we instade send new data and old data together
    const newuserData = {
      id: id,
      quote: quote,
      author: author,
    };
    const isUpdated = [...SelectQuaryResult];
    res.status(200).json({
      message: "quote updated successfully",
      newuserData: newuserData,
      olduserData: isUpdated,
    });

    // after sending the new and old data we won`t the code to run and update the actual data so we are going to return and stop the code from running
    return;

    // update the quote if found
    const updateQuary =
      "UPDATE quotes SET id =? quote = ? author = ?   WHERE id =?";
    const [updatedResult] = await db.execute(updateQuary, id);

    // check if the quote is updated
    if (updatedResult.affectedRows === 0) {
      return res.status(404).json({ message: "quote was not updated" });
    }

    res
      .status(200)
      .json({ message: `quote was updated with the id ${id}`, updatedResult });
  } catch (error) {
    console.log("internal server Error", error);
    res.status(500).json("internal server error", error);
  }
};
const deletequote = async (req, res) => {
  try {
    let { id } = req.params;
    //  validate id
    if (!id) {
      return res.status(400).json({ message: "ID must be provided" });
    }

    const checkDlete = "SELECT * FROM quotes WHERE id = ?";
    const [checkDleteResult] = await db.execute(checkDlete, [id]);

    // check if  data found server send as deleted dat because we don`t want the quote delete the actual data
    if (checkDleteResult) {
      return res
        .status(200)
        .json({ message: "quote was delete successfully", checkDleteResult });
    }
    return;

    const quary = "DLETE * FROM quotes  WHERE id = ?";
    const [result] = await db.execute(quary, [id]);

    // check if the deleted
    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "quote was not deleted" });
    }

    res.status(200).json({ message: "wuote was deleted successfully", result });
  } catch (error) {
    console.log("internal server Error", error);
    res.status(500).json("internal server error", error);
  }
};

module.exports = {
  singlequote,
  allquotes,
  limiteQuote,
  deletequote,
  updatequote,
};
