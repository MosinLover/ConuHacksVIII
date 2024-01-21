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
        const users = await User.find({}).sort({createdAt: -1})
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
exports.getUser = async (req, res) => {
    try {
        const user = await User.findOne({email: req.params.email})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

exports.verifyUser = async (req, res) => {
    try{
        const {email, password} = req.body;

        // Find user with requested email
        const user = await User.findOne({ email });

        if(!user || user.password !== password){
            return res.status(400).json({ message: 'User does not exist.' });
        }
        res.json({success: true})
    }catch(err){
        res.status(400).json({error: err.message})
    }
}