import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useContext, useState, useEffect } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import companyService from '../services/company';
import PopUp from '../components/PopUp';

const EditPage = () => {
    const { darkMode } = useContext(DarkModeContext);
    const { id } = useParams();
    const [requestStatus, setRequestStatus] = useState('')
    const [companyData, setCompanyData] = useState({
        name: '',
        status: '',
        applicationUrl: '',
        notes: '',
        pointOfContacts: [],
    });

    useEffect(() => {
        companyService.getById(id).then((company) => {
            setCompanyData(company);
        });
    }, [id]);

    const handleNewCompanyNameChange = (event) => setCompanyData({ ...companyData, name: event.target.value });
    const handleNewStatusChange = (event) => setCompanyData({ ...companyData, status: event.target.value });
    const handleNewApplicationURLChange = (event) => setCompanyData({ ...companyData, applicationUrl: event.target.value });
    const handleNewNotesChange = (event) => setCompanyData({ ...companyData, notes: event.target.value });

    const updateCompany =  (event) => {
        event.preventDefault();

        if (!companyData.name) {
            alert('Company name is required.');
            return;
        }

        const companyObject = { ...companyData };

      


        companyService.update(id, companyObject).then((updatedCompany) => { 
           
                setRequestStatus(updatedCompany.message)

                setTimeout(() => {
                    setRequestStatus('')
                },3000)
    
            if (updatedCompany) {
                setTimeout(() => (window.location.href = '/'), 10000);
            } else {
                alert('Error updating company');
            }
        });
    };

    return (
        <div
            style={{
                backgroundColor: darkMode ? '#A9A9A9' : '#ffffff',
                color: darkMode ? '#ffffff' : '#000000',
            }}
        >
            <PopUp message={requestStatus}/>
            <Navbar />
            <div id="form-container">
                <form onSubmit={updateCompany} id="edit-company-form">
                    <div id="heading-container">
                        <h2 id="form-heading">Edit Company</h2>
                    </div>
                    <div className="form-field-container">
                        <label htmlFor="form-company-name">Name</label>
                        <input
                            id="form-company-name"
                            type="text"
                            placeholder="Name"
                            value={companyData.name}
                            onChange={handleNewCompanyNameChange}
                        />
                    </div>
                    <div className="form-field-container">
                        <label htmlFor="form-company-status">Status</label>
                        <select
                            name="form-company-status"
                            id="form-company-status"
                            value={companyData.status}
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
                            value={companyData.applicationUrl}
                            onChange={handleNewApplicationURLChange}
                        />
                    </div>
                    <div className="form-field-container">
                        <label htmlFor="form-company-notes">Notes</label>
                        <textarea
                            id="form-company-notes"
                            type="text"
                            placeholder="Notes"
                            value={companyData.notes}
                            onChange={handleNewNotesChange}
                        />
                    </div>
                    <div id="form-button-container">
                        <button id="edit-company-form-button">Update Company</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPage;
