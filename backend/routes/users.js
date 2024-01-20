const express = require('express')
const User = require('../models/User')

const router = express.Router()

// get all users
router.get('/', (req, res) => {
    res.json({msg: 'Get all users'})
})

// get a user
router.get('/:id', (req, res) => {
    res.json({msg: 'Get single user'})
})

// create a user
router.post('/', async (req, res) => {
    const {email, password, lastName, firstName} = req.body;
    try {
        const user = await User.create({email, password, lastName, firstName})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router