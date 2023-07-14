require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const db = require('./config/db')
db.connectDB()

const PORT = process.env.PORT || 3081

//MIDDLEWARE
app.use(express.json());
app.use(cors())

//ROUTES
const workoutRoutes = require('./routes/workouts')
app.use('/api/workouts/', workoutRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})