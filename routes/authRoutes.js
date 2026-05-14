const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const protect = require("../middleware/authMiddleware");
const { registerUser, loginUser ,uploadProfilePic} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/profile-picture", protect, upload.single("profilePic"), uploadProfilePic );

module.exports = router; 