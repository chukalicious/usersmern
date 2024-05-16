const asyncHandler = require('express-async-handler');
const Users = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const getUsers = asyncHandler(async (req, res) => {
  const users = await Users.find();
  res.json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.status(200).json(user);
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please fill all the fields');
  }

  const userExists = await Users.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await Users.create({
    name,
    email,
    password: hashedPassword,
  
  });

  if(!newUser){
    res.status(400);
    throw new Error('Invalid user data');
  } 
  res.status(201).json(newUser);
});

const updateProfile = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  user.email = req.body.email || user.email;
  user.password = req.body.password || user.password;
  const updatedUser = await user.save();
  res.status(201).json(updatedUser);
});

const deleteProfile = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  await user.deleteOne(user);
  res.status(200).json({ message: 'User removed' });
});

module.exports = {
  getUsers,
  getUserById,
  registerUser,
  updateProfile,
  deleteProfile,
};
