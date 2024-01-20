require('dotenv').config()

const express = require('express')
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

app.listen(process.env.PORT, () => {
    console.log('listen on port', process.env.PORT)
})