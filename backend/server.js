const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler}  = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000
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
