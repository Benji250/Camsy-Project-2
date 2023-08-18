const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/ProductController");

router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;