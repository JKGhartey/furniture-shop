const router = require("express").Router();
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json;
  } catch (error) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.fineOne({ username: req.body.username });
    
    const hashedPassword = CryptoJS.AES.decrypt
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
