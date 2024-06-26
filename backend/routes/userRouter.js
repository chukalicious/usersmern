const express = require('express');
const router = express.Router();
const { getUsers, getUserById, registerUser, updateProfile, deleteProfile, loginUser} = require("../controller/usersController");

router.get('/', getUsers);

router.post('/register', registerUser);

router.route("/profile/:id").get(getUserById).put(updateProfile).delete(deleteProfile);   

router.post('/login', loginUser);





module.exports = router;