const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../blog_backend/controllers/authController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
