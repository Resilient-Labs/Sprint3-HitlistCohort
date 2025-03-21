const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    name: String,
    status: String,
    applicationUrl: String,
    notes: String,
    pointOfContacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
    priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium' }, 
})

const CompanyModel = mongoose.model('Company', companySchema)

module.exports = CompanyModel
