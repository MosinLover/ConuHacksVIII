const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return emailRegex.test(value);
            },
            message: 'Invalid email format',
          },
    },
    password: {
        type: String, 
        required: true,
    },
    lastName: {
        type: String, 
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    mortgage: {
        type: Number,
    },
    amortizationYears: {
        type: Number,
    }, 
    amortizationMonths: {
        type: Number,
    },
    paymentFrequency: {
        type: String,
    },
    interestRate: {
        type: Number,
    },
    interestType: {
        type: String,
    },
    interestTermYears: {
        type: Number,
    },
    interestTermMonths: {
        type: Number,
    },
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)