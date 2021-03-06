const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../../models/user');

const { loginValidation } = require("../../validation");

// login route
router.post("/", async (req, res) => {
    // validate the user
    const { error } = loginValidation(req.body);
  
    // throw validation errors
    if (error) return res.status(400).json({ error: error.details[0].message });
  
    const user = await User.findOne({ email: req.body.email });
  
    // throw error when email is wrong
    if (!user) return res.status(400).json({ error: "Email is wrong" });
  
    // check for password correctness
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
      return res.status(400).json({ error: "Password is wrong" });
  
    // create token
    const token = jwt.sign(
      // payload data
      {
        name: users.name,
        id: users._id,
      },
      process.env.TOKEN_SECRET
    );
  
    res.header("auth-token", token).json({
      error: null,
      data: {
        token,
      },
    });
  });
  
  module.exports = router;