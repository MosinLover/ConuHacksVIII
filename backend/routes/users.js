const express = require('express')
const User = require('../models/User')
const UserController = require('../controllers/Usercontroller')

const router = express.Router()

// // get all users
// router.get('/', (req, res) => {
//     res.json({msg: 'Get all users'})
// })

// // get a user
// router.get('/:id', (req, res) => {
//     res.json({msg: 'Get single user'})
// })

// // create a user
// router.post('/', async (req, res) => {
//     const {email, password, lastName, firstName} = req.body;
//     try {
//         // Check if a user with the same email already exists
//         const existingUser = await User.findOne({ email });
    
//         if (existingUser) {
//           // User with the same email already exists, handle accordingly
//           return res.status(400).json({ message: 'User with this email already exists.' });
//         }
//         const user = await User.create({email, password, lastName, firstName})
//         res.status(200).json(user)
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// })

router.post('/',UserController.createUser)
router.get('/',UserController.getAllUsers)
router.get('/:id',UserController.getUser)



module.exports = router