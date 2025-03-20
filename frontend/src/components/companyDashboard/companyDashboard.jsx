import React from 'react'
import './companyDashboard.css' 

const CompanyDashboard = () => {
    // Hardcoded test data
    const applications = [
        { id: 1, company: 'Google', status: 'Applied', date: '2025-03-10' },
        {
            id: 2,
            company: 'Microsoft',
            status: 'Interviewing',
            date: '2025-03-12',
        },
        { id: 3, company: 'Amazon', status: 'Rejected', date: '2025-03-08' },
        {
            id: 4,
            company: 'Facebook',
            status: 'Interviewing',
            date: '2025-03-14',
        },
        { id: 5, company: 'Tesla', status: 'Applied', date: '2025-03-15' },
    ]


    const totalCompanies = applications.length
    const appliedCompanies = applications.filter(
        (app) => app.status === 'Applied'
    ).length
    const interviewingCompanies = applications.filter(
        (app) => app.status === 'Interviewing'
    )


    const recentApplications = applications.slice(-3)
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">
                Current Applications Status Dashboard
            </h1>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <h2>Total Companies</h2>
                    <p>{totalCompanies}</p>
                </div>

                <div className="stat-card">
                    <h2>Applied To</h2>
                    <p>{appliedCompanies}</p>
                </div>

                <div className="stat-card">
                    <h2>Currently Interviewing</h2>
                    <p>{interviewingCompanies.length}</p>
                </div>
            </div>

            <div className="dashboard-section">
                <h2>Currently Interviewing</h2>
                <ul>
                    {interviewingCompanies.map((app) => (
                        <li key={app.id}>{app.company}</li>
                    ))}
                </ul>
            </div>

            <div className="dashboard-section">
                <h2>Recent Applications</h2>
                <ul>
                    {recentApplications.map((app) => (
                        <li key={app.id}>
                            {app.company} - {app.status}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CompanyDashboard
