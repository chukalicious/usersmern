const asyncHandler = require('express-async-handler');
const Users = require('../models/userModels');

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
  if (!req.body.email || !req.body.password) {
    res.status(400);
    throw new Error('Please fill all the fields');
  }
  const newUser = await Users.create(req.body);
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
