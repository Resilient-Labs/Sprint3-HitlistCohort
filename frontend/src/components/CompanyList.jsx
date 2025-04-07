import React, { useState, useEffect } from 'react'
import companiesService from '../services/company'
import { setInitialState, deleteCompanyById, sortCompanies } from '../redux/companySlice'
import SortColumn from './SortColumn'
import './CompanyList.css'
import { Link } from 'react-router-dom'
import PopUp from './PopUp'
import { useDispatch, useSelector } from 'react-redux'

const CompanyList = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [requestStatus, setRequestStatus] = useState('')
    const dispatch = useDispatch()
    const companies = useSelector((state) => state.companies)

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                console.log(response)
                const response = await companiesService.getAll()
                dispatch(setInitialState(response))
            } catch (error) {
                console.log("Unable to fetch companies", error)
            }
        }
        fetchCompanies()
      }, [dispatch])

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this company?')) {
            try {
              const res =  await companyService.remove(id)
              if(res.success){
                setRequestStatus(res.message)
                setTimeout(() => {
                    setRequestStatus('')
                },2000)
              }


              dispatch(deleteCompanyById(id))
                

            } catch (error) {
                console.error('Failed to delete company:', error)
            }
        }
    }

    const filteredCompanies = companies?.filter((company) =>
        company?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const getPriorityClass = (priority) => {
        switch (priority) {
            case 'High':
                return 'high-priority'
            case 'Medium':
                return 'medium-priority'
            case 'Low':
                return 'low-priority'
            default:
                return ''
        }
    }

    return (
        <div className="company-list">
            <PopUp message={requestStatus}/>
            <h2>Companies</h2>
            <input
                type="text"
                placeholder="Search by company name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />

            <table className="company-table">
                <thead>
                    <tr className="header-row">
                        <th>
                            <SortColumn
                                label="Name"
                                columnKey="name"
                                onSortChange={dispatch(sortCompanies)}
                            />
                        </th>
                        <th>Status</th>
                        <th>Application URL</th>
                        <th>Notes</th>
                        <th>Point of Contacts</th>
                        <th>Priority</th>
                        <th>Edit Button</th>
                        <th>Delete Button</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCompanies.map((company, index) => (
                        <tr key={index} className="data-rows">
                            <td>{company.name}</td>
                            <td>{company.status}</td>
                            <td>
                                <a
                                    href={company.applicationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {company.applicationUrl}
                                </a>
                            </td>
                            <td>{company.notes || 'No notes available'}</td>
                            <td>
                                {company.pointOfContacts &&
                                company.pointOfContacts.length > 0
                                    ? company.pointOfContacts.join(', ')
                                    : 'No contacts available'}
                            </td>
                            <td className={getPriorityClass(company.priority)}>
                                {company.priority}
                            </td>
                            <td className="edit-cell">
                                <Link
                                    to={`/edit/${company._id}`}
                                    className="edit-link"
                                >
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <button
                                    onClick={() => handleDelete(company._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CompanyList

CompanyList.propTypes = {
    companies: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string,
        status: PropTypes.string,
        applicationUrl: PropTypes.string,
        notes: PropTypes.string,
        pointOfContacts: PropTypes.arrayOf(PropTypes.string),
        priority: PropTypes.string,
      })
    ).isRequired,
    deleteCompany: PropTypes.func.isRequired,
    sortCompanies: PropTypes.func.isRequired,
}
