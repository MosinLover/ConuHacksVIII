const User = require('../models/User')

exports.createUser = async (req, res) => {
    const {email, password, lastName, firstName} = req.body;
    try{
        const existingUser = await User.findOne({ email });

        if (existingUser) {
          // User with the same email already exists, handle accordingly
          return res.status(400).json({ message: 'User with this email already exists.' });
        }

        const user = await User.create({email, password, lastName, firstName})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
exports.getUser = async (req, res) => {
    const {id} = req.params
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}