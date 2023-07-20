const express = require('express')

const { getUsers, createUser, loginUser } = require('../controllers/userController')

const router = express.Router()

//GET all users
router.get('/', getUsers)

//GET a single user
//router.get('/:id', getWorkout)

//create a new user
router.post('/signup', createUser)

//create a new user
router.post('/login', loginUser)

//DELETE a user
//router.delete('/:id', deleteWorkout)

//UPDATE a user
//router.patch('/:id', updateWorkout)

module.exports = router