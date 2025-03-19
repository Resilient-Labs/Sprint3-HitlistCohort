import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  company: Object,
  date: String,
})
