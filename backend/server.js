require('dotenv').config({ path: `${__dirname}/../.env` })
const express = require('express')
const app = express()
const main = require('./mongoose')
const Company = require('./models/company.schema')
const User = require('./models/user.schema')
const PORT = 3001
const jwt = require('jsonwebtoken')
const cors = require('cors')

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }))

app.post('/sign-up', async (req, res) => {
  try {
      const { email, password, username } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: 'Email already in use' });
      }

      const user = new User({ email, password, username });

      const token = jwt.sign({ email, password, username }, 'xxx-xxx', { expiresIn: '1h' });

      await user.save();

      res.status(201).json({ user, message: 'User registered successfully', token });
  } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      const user = await User.findOne({ email });
      console.log(user)

      if (!user) {
          return res.status(400).json({ message: 'Invalid email or password' });
      }

      const isMatch = await user.comparePassword(password);

      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ email, password }, "xxx-xxx", { expiresIn: '1h' });

      res.json({message: 'Login successful', token, user });
  } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
  }
});


//***** ADD COMPANY *****
app.post('/companies', async (req, res) => {
    try {
        const { name, status, applicationUrl, notes, pointOfContact } = req.body

        const newCompany = new Company({
            name,
            status,
            applicationUrl,
            notes,
            pointOfContact,
        })
        await newCompany.save()

        console.log('Company saved:', newCompany)
        res.status(201).json(newCompany)
    } catch (error) {
        console.error('Error saving company', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

//***** DELETE COMPANY *****
app.delete('/companies/:id', async (req, res) => {
    try {
        const deletedCompany = await Company.findByIdAndDelete(req.params.id)

        if (!deletedCompany) {
            return res.status(404).json({ message: 'Company not found' })
        }

        res.json({ message: 'Company Deleted', deletedCompany })
    } catch (error) {
        console.error('Error deleting company:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

app.use(express.static('dist'))
app.use(main)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
