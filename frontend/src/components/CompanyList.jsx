import React, { useState, useEffect } from "react";
import companyService from "../services/company"; 
import SortColumn from "./SortColumn";
import "./CompanyList.css";

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        companyService
            .getAll()
            .then((data) => {
                setCompanies(data || []); 
            })
            .catch((error) => console.error("Error fetching companies:", error));
    }, []);

    const handleSort = (columnKey, order) => {
        const sorted = [...companies].sort((a, b) => {
            let valueA = a[columnKey]?.toLowerCase() || "";
            let valueB = b[columnKey]?.toLowerCase() || "";
            return order === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        });

        setCompanies(sorted);
    };

    return (
        <div className="company-list">
            <h2>Companies</h2>
            <table className="company-table">
                <thead>
                    <tr className="header-row">
                        <th>
                            <SortColumn label="Name" columnKey="name" onSortChange={handleSort} />
                        </th>
                        <th>Status</th>
                        <th>Application URL</th>
                        <th>Notes</th>
                        <th>Point of Contacts</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company, index) => (
                        <tr key={index} className="data-rows">
                            <td>{company.name}</td>
                            <td>{company.status}</td>
                            <td>
                                <a href={company.applicationUrl} target="_blank" rel="noopener noreferrer">
                                    {company.applicationUrl}
                                </a>
                            </td>
                            <td>{company.notes || "No notes available"}</td>
                            <td>
                                {company.pointOfContacts && company.pointOfContacts.length > 0
                                    ? company.pointOfContacts.join(", ")
                                    : "No contacts available"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompanyList;
