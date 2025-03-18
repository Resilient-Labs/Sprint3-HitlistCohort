const User = require('../models/user.schema')
const jwt = require('jsonwebtoken')
const loginRouter = require('express').Router()

loginRouter.post('/', async (req, res) => {
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

module.exports = loginRouter
