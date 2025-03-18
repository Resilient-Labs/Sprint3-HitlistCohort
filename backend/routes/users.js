const User = require('../models/user.schema')
const jwt = require('jsonwebtoken')
const usersRouter = require('express').Router()

app.post('/', async (req, res) => {
    try {
        const { email, password, username } = req.body

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' })
        }

        const user = new User({ email, password, username })

        const token = jwt.sign({ email, password, username }, 'xxx-xxx', {
            expiresIn: '1h',
        })

        await user.save()

        res.status(201).json({
            user,
            message: 'User registered successfully',
            token,
        })
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
})

module.exports = usersRouter
