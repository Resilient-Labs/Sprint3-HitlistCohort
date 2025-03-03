const companyApiSchema = require('../models/companyApiRequest.schema')

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

// Validations
async function validateCompany(request, response, next) {
    try {

        // Validate the request body against the company validations schema
        await companyApiSchema.validateAsync(request.body);

        // If validation passes, proceed to the next middleware or route handler.
        next();

    } catch (error) {

        const errors = error.details.map((detail) => detail.message); // Extract all error messages
        return response.status(422).json({errors: errors }) // Sends an array of errors.
    }
}

module.exports = {
    unknownEndpoint,
    validateCompany
}
