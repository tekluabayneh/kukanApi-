const express = require("express");
const userRoute = express.Router();

const {
  getalluser,
  singleuser,
  getLimiteduser,
  deleteuser,
  updateuser,
  adduser,
} = require("../../controllers/users/usersController");

userRoute.get("/", getalluser);
userRoute.get("/adduser", adduser);
userRoute.get("/:id", singleuser);
userRoute.get("/limit/:limit", getLimiteduser);
userRoute.put("/update/:id", updateuser);
userRoute.delete("/deleteuser/:id", deleteuser);

module.exports = userRoute;
//http://localhost:8000/users // get all users

// http://localhost:8000/users/adduser // adding user to the datase

// http://localhost:8000/users/2 // get single user

// http://localhost:8000/users/limit/2 // get limited users

// http://localhost:8000/users/deleteuser/2 //delete user by id

// http://localhost:8000/users/update/4 // update the user data
