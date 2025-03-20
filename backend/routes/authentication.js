const User = require('../models/user.schema')
const jwt = require('jsonwebtoken')
const authenticationRouter = require('express').Router()

authenticationRouter.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        console.log(user)

        if (!user) {
            return res
                .status(400)
                .json({ message: 'Invalid email or password' })
        }

        const isMatch = await user.comparePassword(password)

        if (!isMatch) {
            return res
                .status(400)
                .json({ message: 'Invalid email or password' })
        }

        const token = jwt.sign({ email, password }, 'xxx-xxx', {
            expiresIn: '1h',
        })

        res.json({ message: 'Login successful', token, user })
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
})

authenticationRouter.post('/sign-up', async (req, res) => {
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

module.exports = authenticationRouter
