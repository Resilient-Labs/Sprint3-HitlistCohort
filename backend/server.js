require('dotenv').config({ path: `${__dirname}/../.env` })
const express = require('express')
const app = express()
const main = require('./mongoose')
const Company = require('./models/company.schema');


// app.get('/', (request, response) => {
//   response.send('<h1>Hello World!</h1>')
// })

//***** ADD COMPANY ***** 
app.post('/companies', async (req,res) => {
  try { 
    const { name, status, applicationUrl, notes, pointOfContact } = req.body;

    const newCompany = new Company ({
      name,
      status,
      applicationUrl,
      notes,
      pointOfContact,
    })
    await newCompany.save();

    console.log('Company saved:', newCompany)
    res.status(201).json(newCompany)
  }catch (error){
    console.error("Error saving company", error)
    res.status(500).json({ error: "Internal Server Error" });
  }
})

//***** DELETE COMPANY *****
app.delete('/companies/:id', async (req, res) => {
  try {
    const deletedCompany = await Company.findByIdAndDelete(req.params.id);

    if (!deletedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.json({ message: "Company Deleted", deletedCompany });
  } catch (error) {
    console.error("Error deleting company:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.use(express.static('dist'))
app.use(express.json());
app.use(main)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
