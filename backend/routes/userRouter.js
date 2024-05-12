const express = require('express');
const router = express.Router();
const { getUsers, getUserById, registerUser, updateProfile, deleteProfile} = require("../controller/usersController");

router.get('/', getUsers);

router.post('/register', registerUser);

router.route("/profile/:id").get(getUserById).put(updateProfile).delete(deleteProfile);   

router.post('/login', (req, res) => {
    res.status(200).send({ message: 'User Registered' });
});





module.exports = router;