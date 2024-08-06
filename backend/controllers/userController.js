const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  // Login route
  const { email, password } = req.body;

  try {
    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide both email and password" });
    }

    // Find the user in the database by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // If the password matches, authentication is successful
    // You can generate a token or set a session here
    res
      .status(200)
      .json({
        message: "Login successful",
        user: { id: user.id, email: user.email, name: user.name, token: GenerateJwtToken(user.id) },
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};




const registerUser = async (req, res) => {
    const { email, password, name } = req.body;

    try {
      // Input validation
      if (!email || !name || !password) {
        return res.status(400).json({ message: "Please provide all fields" });
      }
  
      // Simple email and password validation
      const emailRegex = /\S+@\S+\.\S+/;
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
  
      if (!passwordRegex.test(password)) {
        return res.status(400).json({ message: "Password must be at least 8 characters long and include letters and numbers" });
      }
  
      // Check if user already exists
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "Email is already registered" });
      }
  
      // Hash the password and create the user
      const hashPassword = await bcrypt.hash(password, 10);
      const user = await userModel.create({ email, name, password: hashPassword });
  
      // Respond with the new user (excluding password)
      res.status(201).json({ user, token: GenerateJwtToken(user.id)});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

  // Jwt Token Generator
  const GenerateJwtToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
      expiresIn: '30d'
    })
  }


  const getMe = async (req,res) => {
    res.status(200).json(req.user)
  }



module.exports = {
  loginUser,
  registerUser,
  getMe
};
