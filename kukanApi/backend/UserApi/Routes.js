const express = require("express");
const Api_and_user_Route = express.Router();
const { register, login } = require("./controller");

Api_and_user_Route.post("/login", login);
Api_and_user_Route.post("/register", register);

module.exports = Api_and_user_Route;

// http://localhost:8000/user_apikey/register

// http://localhost:8000/user_apikey/login

//
// CREATE TABLE api_keys (
// id INT(11) NOT NULL AUTO_INCREMENT,
// user_id INT(11) NOT NULL,
// api_key VARCHAR(255) NOT NULL UNIQUE,
// request_limit INT(11) NOT NULL DEFAULT 10,
// request_count INT(11) NOT NULL DEFAULT 0,
// reset_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
// PRIMARY KEY (id),
// KEY user_id (user_id)
// )
//
// CREATE TABLE user (
// id INT(11) NOT NULL AUTO_INCREMENT,
// email VARCHAR(255) NOT NULL UNIQUE,
// password VARCHAR(255) NOT NULL,
// PRIMARY KEY (id)
// )
//
//
// CREATE TABLE post (
// id INT(11) NOT NULL AUTO_INCREMENT,
// title VARCHAR(255) NOT NULL,
// body TEXT NOT NULL,
// author VARCHAR(100) NOT NULL,
// views INT(11) NOT NULL,
// userId INT(11) NOT NULL,
// PRIMARY KEY (id)
// )
//
//
// CREATE TABLE products (
// id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
// title VARCHAR(255) DEFAULT NULL,
// price DECIMAL(10,2) DEFAULT NULL,
// description TEXT DEFAULT NULL,
// category VARCHAR(100) DEFAULT NULL,
// image VARCHAR(255) DEFAULT NULL,
// rating_rate DECIMAL(5,2) DEFAULT NULL,
// rating_count DECIMAL(5,2) DEFAULT NULL,
// PRIMARY KEY (id)
// )
//
//
// CREATE TABLE quote (
// id INT(11) NOT NULL AUTO_INCREMENT,
// quote TEXT NOT NULL,
// author VARCHAR(255) NOT NULL,
// PRIMARY KEY (id)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
//
//
// CREATE TABLE users (
// id INT(11) NOT NULL AUTO_INCREMENT,
// firstName VARCHAR(255) NOT NULL,
// lastName VARCHAR(255) NOT NULL,
// age DECIMAL(5,2) NOT NULL,
// gender ENUM('Male', 'Female') NOT NULL,
// email VARCHAR(255) NOT NULL UNIQUE,
// phone VARCHAR(15) DEFAULT NULL,
// username VARCHAR(50) NOT NULL UNIQUE,
// password VARCHAR(255) NOT NULL,
// PRIMARY KEY (id)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
//
