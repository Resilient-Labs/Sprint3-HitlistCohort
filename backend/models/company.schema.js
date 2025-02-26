import mongoose from 'mongoose'

const companySchema = new mongoose.Schema({
    name: String,
    addressOne: String,
    addressTwo: String,
    city: String,
    state: String,
    zipCode: String,
    contact: {
        phone: String,
        email: String,
        website: String,
        jobListing: String,
    },
})

const CompanyModel = mongoose.model('Company', companySchema)

export default CompanyModel
