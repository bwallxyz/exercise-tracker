const mongoose = require('mongoose')
const Users = require('../models/userModel')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

const createToken = (_id) => {
    return jwt.sign({_id}, JWT_SECRET, { expiresIn: '3d'})
}


//get all users
const getUsers = async (req, res) => {
    const users = await Users.find()
    res.json(users)
}

//create a user
const createUser = async (req, res) => {
    const {email, password} = req.body

    try {
       const user = await Users.signup(email, password)

       //create a jwt token
       const token = createToken(user._id)
        console.log(token)
        res.status(200).json({email, token})

    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
       const user = await Users.login(email, password)

        //create a jwt token
        const token = createToken(user._id)
        res.status(200).json({email, token})

    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

module.exports = {
    loginUser,
    createUser,
    getUsers
}