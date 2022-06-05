const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler}  = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

// Connect to DB
connectDB()

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler)

app.get('/', (req,res) => {
    res.send('Hello')
})
//Routes
app.use('/api/users', require('./routes/userRoutes'))

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
