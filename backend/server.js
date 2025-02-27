const express = require('express')
const app = express()

// app.get('/', (request, response) => {
//   response.send('<h1>Hello World!</h1>')
// })

//***** ADD COMPANY ***** */
app.post('/companies',(req,res) => {
  const { name, status, applicationUrl, notes, pointOfContact } = req.body;

  const newCompany = {
    name,
    status,
    applicationUrl,
    notes: notes || '',
    pointOfContact,
  }
  companies.push(newCompany)

  console.log('Company saved:', newCompany)
  res.status(201).json(newCompany)
})

//***** DELETE COMPANY *****
app.delete('/companies/:id', (req,res) => {
    companies = companies.filter(c => c.id !== parseInt(req.params.id))
    res.json({message: 'Company Deleted'})
})


app.use(express.static('dist'))

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})