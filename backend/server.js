require('dotenv').config({ path: `${__dirname}/../.env` })
const express = require('express')
const app = express()
const main = require('./mongoose')
const Company = require('./models/company.schema');
app.use(express.json()); // Enables JSON parsing
// app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data



// app.get('/', (request, response) => {
//   response.send('<h1>Hello World!</h1>')
// })



//***** GET COMPANY INFO*****
app.get('/companies', async (req, res) => {
  try {
    await Company.find({}).then(company => {
      res.json(company)
    })
  } catch (error) {
    console.error("Error getting companies", error)
    res.status(500).json({ error: "Internal Server Error" });
  }
})


//***** Edit company info *****

app.put('/companies/:id', async (req,res) => {
  try {
      const body = req.body
      const companyInfo = {
        name: body.name,
        status: body.status,
        applicationUrl: body.applicationUrl,
        notes: body.notes,
        pointOfContacts: body.pointOfContacts
      }
      const ID = req.params.id
      Company.findByIdAndUpdate(ID,companyInfo,{new: true})
        .then(updatedCompnayInfo => {
          res.json(updatedCompnayInfo)
        })

  } catch (error) { 
    console.error("Error Editing compnay info")
    res.status(500).json({error: "Internal Server Error"})
  }
})


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





const PORT = process.env.PORT || 3000;
app.use(express.static('dist'))
app.use(express.json());
app.use(main)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
