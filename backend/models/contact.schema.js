import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  linkedIn: String,
  company: String,
  lastContactDate: String,
})

export const ContactModel = mongoose.model('Contact', contactSchema)