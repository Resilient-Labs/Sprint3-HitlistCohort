const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  linkedIn: String,
  company: String,
  lastContactDate: {type: Date},
})

const ContactModel = mongoose.model('Contact', contactSchema)

module.exports = ContactModel