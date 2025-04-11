import './CompanyForm.css'
import { useState, useRef } from 'react'
import { useCompany } from '../contexts/CompanyContext'
import PopUp from './PopUp'

const CompanyForm = () => {
    const { createNewCompany } = useCompany()

    const [requestStatus, setRequestStatus] = useState('')
    const companyFormRef = useRef(null)

    const addCompany = async (event) => {
        event.preventDefault()
        // Values pulled from form using useRef
        const name = companyFormRef.current.formCompanyName.value.trim()
        const status = companyFormRef.current.formCompanyStatus.value.trim()
        const applicationUrl =
            companyFormRef.current.formCompanyUrl.value.trim()
        const notes = companyFormRef.current.formCompanyNotes.value.trim()
        const pointOfContact =
            companyFormRef.current.formCompanyContacts.value.trim()
        const priority = companyFormRef.current.formCompanyPriority.value.trim()

        const companyObject = {
            name,
            status,
            applicationUrl,
            notes,
            pointOfContact,
            priority,
        }

        const res = await createNewCompany(companyObject)

        console.log(res)

        setRequestStatus(res.message)

        setTimeout(() => {
            setRequestStatus('')
        }, 2000)

        // Clears the form after submit
        companyFormRef.current.reset()
    }

    return (
        <>
            <PopUp message={requestStatus} />
            <div id="form-container">
                <form
                    onSubmit={addCompany}
                    id="add-company-form"
                    ref={companyFormRef}
                >
                    <div id="heading-container">
                        <h2 id="form-heading">Add new Company</h2>
                    </div>
                    <div className="form-field-container">
                        <label htmlFor="form-company-name">Name</label>
                        <input
                            id="form-company-name"
                            type="text"
                            placeholder="Name"
                            name="formCompanyName"
                        />
                    </div>
                    <div className="form-field-container">
                        <label htmlFor="form-company-status">Status</label>
                        <select
                            name="formCompanyStatus"
                            id="form-company-status"
                        >
                            <option value="">
                                --Please choose an option--
                            </option>
                            <option value="hiring">Hiring</option>
                            <option value="interested">Interested</option>
                            <option value="interviewing">Interviewing</option>
                        </select>
                    </div>
                    <div className="form-field-container">
                        <label htmlFor="form-company-url">
                            Application URL
                        </label>
                        <input
                            id="form-company-url"
                            type="url"
                            placeholder="Application URL"
                            name="formCompanyUrl"
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
                            name="formCompanyContacts"
                        />
                    </div>
                    <div className="form-field-container">
                        <label htmlFor="form-company-notes">Notes</label>
                        <textarea
                            id="form-company-notes"
                            type="text"
                            placeholder="Notes"
                            name="formCompanyNotes"
                        />
                    </div>
                    <div className="form-field-container">
                        <label htmlFor="form-company-priority">Priority</label>
                        <select
                            name="formCompanyPriority"
                            id="form-company-priority"
                        >
                            <option value="">
                                --Please choose an option--
                            </option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <div id="form-button-container">
                        <button id="add-company-form-button" type="submit">
                            Add Company
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CompanyForm
