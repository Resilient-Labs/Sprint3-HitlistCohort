import './App.css'
import CompanyList from './components/CompanyList'
import ContactList from './components/ContactList'
// import CompanyForm from "./components/CompanyForm"
import Navbar from './components/Navbar'

function App() {
    // Mock Data (delete once real data is added)
    const data = [
        {
            name: 'Notion',
            status: 'Hiring',
            url: 'www.google.com',
            notes: 'Met at meetup',
            contact: 'Lena Carter',
        },
        {
            name: 'Google',
            status: 'Interested',
            url: 'www.google.com',
            notes: 'Messaged on Linkedin',
            contact: 'Marcus Delgado',
        },
        {
            name: 'Apple',
            status: 'Interviewing',
            url: 'www.google.com',
            notes: 'On first interview out of 3',
            contact: 'Jasper Nguyen',
        },
    ]

    return (
        <>
            <Navbar />
            <CompanyList data={data} />
            <ContactList contacts={data.map((company) => company.contact)} />
            {/* <CompanyForm/> */}
        </>
    )
}

export default App
