require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const usersRoute = require('./routes/users')

const app = express()

app.use(express.json())
// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/users', usersRoute)

// connect to mongo
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('listen on port and mongoose', process.env.PORT)
    })
}).catch((err) => {
    console.log(err)
})
