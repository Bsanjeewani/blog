const express = require("express");
const {
  getBlogs,
  createBlog,
} = require("../blog_backend/controllers/blogController");
const { protect } = require("../blog_backend/middleware/authMiddleware");
const router = express.Router();

router.get("/", getBlogs);
router.post("/", protect, createBlog);

module.exports = router;
