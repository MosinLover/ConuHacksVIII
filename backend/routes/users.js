const express = require('express')
const User = require('../models/User')
const UserController = require('../controllers/Usercontroller')

const router = express.Router()

// create user
router.post('/',UserController.createUser)
// get all users
router.get('/',UserController.getAllUsers)
// get a single user
router.get('/:id',UserController.getUser)

module.exports = router