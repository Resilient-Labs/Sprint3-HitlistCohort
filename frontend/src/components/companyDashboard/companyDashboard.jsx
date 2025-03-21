import React from 'react'
import './companyDashboard.css'

const DASHBOARD_TITLE = 'Current Applications Status Dashboard'
const TOTAL_COMPANIES = 'Total Companies'
const APPLIED_TO = 'Total Companies'
const CURRENTLY_INTERVIEWING = 'Currently Interviewing'
const RECENT_APPLICATIONS = 'Recent Applications'

const CompanyDashboard = ({ applications }) => {
    const totalCompanies = applications.length
    const appliedCompanies = applications.filter(
        (app) => app.status === 'Applied'
    ).length
    const interviewingCompanies = applications.filter(
        (app) => app.status === 'interviewing'
    )

    const recentApplications = applications.slice(-3)
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">{DASHBOARD_TITLE}</h1>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <h2>{TOTAL_COMPANIES}</h2>
                    <p>{totalCompanies}</p>
                </div>

                <div className="stat-card">
                    <h2>{APPLIED_TO}</h2>
                    <p>{appliedCompanies}</p>
                </div>

                <div className="stat-card">
                    <h2>{CURRENTLY_INTERVIEWING}</h2>
                    <p>{interviewingCompanies.length}</p>
                </div>
            </div>

            <div className="dashboard-section">
                <h2>{CURRENTLY_INTERVIEWING}</h2>
                <ul>
                    {interviewingCompanies.map((app) => (
                        <li key={app._id}>{app.name}</li>
                    ))}
                </ul>
            </div>

            <div className="dashboard-section">
                <h2>{RECENT_APPLICATIONS}</h2>
                <ul>
                    {recentApplications.map((app) => (
                        <li key={app._id}>
                            {app.name} - {app.status}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CompanyDashboard
