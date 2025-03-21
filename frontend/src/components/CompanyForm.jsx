import './CompanyForm.css'
import { useState } from 'react'
import companyService from '../services/company'

const CompanyForm = () => {
    const [newCompanyName, setNewCompanyName] = useState('')
    const [newStatus, setNewStatus] = useState('')
    const [newApplicationURL, setNewApplicationURL] = useState('')
    const [newNotes, setNewNotes] = useState('')
    const [newPointOfContact, setNewPointOfContact] = useState('')
    const [newPriority, setNewPriority] = useState('')

    const handleNewCompanyNameChange = (event) => {
        setNewCompanyName(event.target.value)
    }

    const handleNewStatusChange = (event) => {
        setNewStatus(event.target.value)
    }

    const handleNewApplicationURLChange = (event) => {
        setNewApplicationURL(event.target.value)
    }

    const handleNewNotesChange = (event) => {
        setNewNotes(event.target.value)
    }

    const handleNewPointOfContactChange = (event) => {
        setNewPointOfContact(event.target.value)
    }

    const handleNewPriorityChange = (event) => {
        setNewPriority(event.target.value)
    }

    const addCompany = (event) => {
        event.preventDefault()

        const companyObject = {
            name: newCompanyName,
            status: newStatus,
            applicationUrl: newApplicationURL,
            notes: newNotes,
            pointOfContact: newPointOfContact,
            priority: newPriority,
        }

        companyService.create(companyObject).then(() => {
            setNewCompanyName('')
            setNewStatus('')
            setNewApplicationURL('')
            setNewNotes('')
            setNewPointOfContact('')
            setNewPriority('')
        })
    }

    return (
        <div id="form-container">
            <form onSubmit={addCompany} id="add-company-form">
                <div id="heading-container">
                    <h2 id="form-heading">Add new Company</h2>
                </div>
                <div className="form-field-container">
                    <label htmlFor="form-company-name">Name</label>
                    <input
                        id="form-company-name"
                        type="text"
                        placeholder="Name"
                        value={newCompanyName}
                        onChange={handleNewCompanyNameChange}
                    />
                </div>
                <div className="form-field-container">
                    <label htmlFor="form-company-status">Status</label>
                    <select
                        name="form-company-status"
                        id="form-company-status"
                        onChange={handleNewStatusChange}
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="hiring">Hiring</option>
                        <option value="interested">Interested</option>
                        <option value="interviewing">Interviewing</option>
                    </select>
                </div>
                <div className="form-field-container">
                    <label htmlFor="form-company-url">Application URL</label>
                    <input
                        id="form-company-url"
                        type="url"
                        placeholder="Application URL"
                        value={newApplicationURL}
                        onChange={handleNewApplicationURLChange}
                    />
                </div>
                <div className="form-field-container">
                    <label htmlFor="form-company-contacts">
                        Points of Contact
                    </label>
                    <input
                        id="form-company-contacts"
                        type="text"
                        placeholder="Points of Contact"
                        value={newPointOfContact}
                        onChange={handleNewPointOfContactChange}
                    />
                </div>
                <div className="form-field-container">
                    <label htmlFor="form-company-notes">Notes</label>
                    <textarea
                        id="form-company-notes"
                        type="text"
                        placeholder="Notes"
                        value={newNotes}
                        onChange={handleNewNotesChange}
                    />
                </div>
                <div className="form-field-container">
                    <label htmlFor="form-company-priority">Priority</label>
                    <select
                        name="form-company-priority"
                        id="form-company-priority"
                        onChange={handleNewPriorityChange}
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="Hight">High</option>
                    </select>
                </div>
                <div id="form-button-container">
                    <button id="add-company-form-button">Add Company</button>
                </div>
            </form>
        </div>
    )
}

export default CompanyForm
