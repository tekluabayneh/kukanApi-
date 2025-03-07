const express = require("express");
const productRouter = express.Router();
const {
  getallproduct,
  getSingleProduct,
  getproductByCategory,
  updateProduct,
  deleteProduct,
} = require("../../controllers/product/productController");

productRouter.get("/", getallproduct);
productRouter.get("/:id", getSingleProduct);
productRouter.get("/category/:categoryName", getproductByCategory);
productRouter.put("/update", updateProduct);
productRouter.get("/delete/:id", deleteProduct);

module.exports = productRouter;

// http://localhost:8000/product // get all product

// http://localhost:8000/product/5 // GET SINGLE PRODCUT BY ID

// http://localhost:8000/product/category/electronics //  get products by category

// http://localhost:8000/product/delete/2 // delete product by id

// http://localhost:8000/product/update // update product
