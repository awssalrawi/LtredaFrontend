const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategories,
  getCategoryById,
} = require("./../controllers/categoryController");

router.post("/categories/create", createCategory);
router.get("/categories/getall", getAllCategories);
router.get("/categories/:categoryId", getCategoryById);

module.exports = router;
