const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db"); 
require("dotenv").config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { identifier, password } = req.body;

  if (!identifier || !password) {
    return res.status(400).json({ message: "Username/Email and password are required" });
  }

  try {
    const query = identifier.includes("@") 
      ? "SELECT * FROM users WHERE email = ?"  
      : "SELECT * FROM users WHERE username = ?";

    const [user] = await db.query(query, [identifier]);
    
    if (user.length === 0) {
      return res.status(401).json({ message: "Invalid username/email or password" });
    }

    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid username/email or password" });
    }

    const token = jwt.sign(
      { id: user[0].id, email: user[0].email, username: user[0].username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
