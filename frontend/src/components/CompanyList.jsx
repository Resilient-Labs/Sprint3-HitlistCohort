import React, { useState, useEffect } from 'react'
import companyService from '../services/company'
import SortColumn from './SortColumn'
import './CompanyList.css'
import { Link } from 'react-router-dom'

const CompanyList = () => {
    const [companies, setCompanies] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        companyService
            .getAll()
            .then((data) => {
                setCompanies(data || [])
            })
            .catch((error) => console.error('Error fetching companies:', error))
    }, [])

    const handleSort = (columnKey, order) => {
        const sorted = [...companies].sort((a, b) => {
            let valueA = a[columnKey]?.toLowerCase() || ''
            let valueB = b[columnKey]?.toLowerCase() || ''
            return order === 'asc'
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA)
        })

        setCompanies(sorted)
    }

    const filteredCompanies = companies.filter((company) =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase())
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
                                onSortChange={handleSort}
                            />
                        </th>
                        <th>Status</th>
                        <th>Application URL</th>
                        <th>Notes</th>
                        <th>Point of Contacts</th>
                        <th>Priority</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CompanyList
