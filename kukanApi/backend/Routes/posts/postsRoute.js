const express = require("express");
const postRouter = express.Router();
const {
  getAllPosts,
  getPostById,
  getLimitedPosts,
  searchPosts,
  deletePosts,
  updatePosts,
  addnewPost,
} = require("../../controllers/postes/postController");

postRouter.get("/", getAllPosts);
postRouter.get("/limit/:limit", getLimitedPosts);
postRouter.get("/search/:num", searchPosts);
postRouter.post("/addposts", addnewPost);
postRouter.get("/getpostById/:id", getPostById);
postRouter.delete("/deletepost/:id", deletePosts);
postRouter.put("/updatepost", updatePosts);

module.exports = postRouter;

// http://localhost:8000/posts // all postes

// http://localhost:8000/posts/getpostById/6 // get post by id

// http://localhost:8000/posts/limit/2 get post with limited value

//  http://localhost:8000/posts/search/1400 / search post by view number

// http://localhost:8000/posts/updatepost  // update post

// http://localhost:8000/posts/deletepost/4 // delete ost by id

// http://localhost:8000/posts/addposts // adding new post BUT REMBER U NEED TO SPECIFY ID TO NOT ADD DEPULICATE DATA

// http://localhost:8000/posts?api_key=956913e4c596ed8733e532791176c7377f6994a4215572d22bcf857a2a88ccec
