const express = require("express");
const quoteRouter = express.Router();
const {
  singlequote,
  allquotes,
  limiteQuote,
  deletequote,
  updatequote,
} = require("../../controllers/quote/quoteController");

quoteRouter.get("/", allquotes);
quoteRouter.get("/:id", singlequote);
quoteRouter.get("/limit/:limit", limiteQuote);
quoteRouter.put("/update", updatequote);
quoteRouter.delete("/delete/:id", deletequote);

module.exports = quoteRouter;

// http://localhost:8000/quotes/ // GET ALL QUOTE

// http://localhost:8000/quotes/2 //GET SINGLE QUOTE

// http://localhost:8000/quotes/limit/1 // get limited quote

// http://localhost:8000/quotes/update // update quote

//  http://localhost:8000/quotes/delete/3 // delete quote  by id
