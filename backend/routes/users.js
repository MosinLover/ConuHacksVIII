const express = require('express')

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
router.post('/', (req, res) => {
    res.json({msg: 'Post a user'})
})

module.exports = router