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

//as of 3.1 at 3am, stopped here. Just giving myself some starter code as I wait to speak to team or read other tickets to understand what the goals are here. And also think because i flaked on a meeting I lost some info and dont know how to run the backend properly to test even this code i've written here.
//https://github.com/Resilient-Labs/Sprint3-HitlistCohort/issues/10
//TODO: delete this comment
app.get('/companies/points-of-contact-simple', async (req, res) => {
  //returns simple, flattened array of strings
  try {
    // Query only the pointOfContacts field from all companies
    const companiesPoc = await Company.find({}, 'pointOfContacts');

    // Extract just the array of contacts from each company document
    const pointsOfContact = companiesPoc
      .map(company => company.pointOfContacts)
      .flat() // Flatten to return a single array of all contacts
    console.log("hi charles")
    console.log(pointsOfContact)
    res.json({ pointsOfContact });
  } catch (error) {
    console.error("Error fetching points of contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/companies/points-of-contact-advanced', async (req, res) => {
  //returns an array of objects containing id and pointofcontact
  try {
    // Query only the pointOfContacts field from all companies
    const companiesPoc = await Company.find({}, 'pointOfContacts');

    // Extract just the array of contacts from each company document
    const pointsOfContact = companiesPoc
      .map(company => [{id: company.id, pointOfContact: company.pointOfContacts}])
      .flat()

    res.json({ pointsOfContact });
  } catch (error) {
    console.error("Error fetching points of contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});