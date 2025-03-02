import React, { useState, useEffect } from "react";
import SortColumn from "./SortColumn";
import './CompanyList.css'

const CompanyList = ({ data }) => {
    const [sortedData, setSortedData] = useState([...data]);

    useEffect(() => {
        setSortedData([...data]);
    }, [data]);

    const handleSort = (columnKey, order) => {
        const sorted = [...data].sort((a,b) => {
            let valueA = a[columnKey]?.toLowerCase() || "";
            let valueB = b[columnKey]?.toLowerCase() || "";
            return order === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        });

    setSortedData(sorted);
    };

    return (
        <div>
            <h2>Companies</h2>
            <table>
                <thead>
                    <tr className="header-row">
                        <th>
                            <SortColumn label="Name" columnKey="name" onSortChange={handleSort}></SortColumn>
                        </th>
                        <th>Status</th>
                        <th>Application URL</th>
                        <th>Notes</th>
                        <th>Point of Contacts</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((company, index) => (
                        <tr key={index} className="data-rows">
                            <td>{company.name}</td>
                            <td>{company.status}</td>
                            <td>
                                <a href={company.url} target="_blank">
                                    {company.url}
                                </a>
                            </td>
                            <td>{company.notes}</td>
                            <td>{company.contact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CompanyList
