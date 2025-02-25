import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [companies, setCompanies] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // TODO: useEffect for companies data define here

  // TODO: handle form text filtering

  // companies filtered & organized
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(filter.toLowerCase())
  );

  // sorting considering numeric parts of string, cases, accents and special characters
  const sortedCompanies = [...filteredCompanies].sort((a, b) => {
    return sortOrder === 'asc'
      ? a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
      : b.name.localeCompare(a.name, undefined, { numeric: true, sensitivity: 'base' });
  });

  return (
    <>
     <h1>hello world</h1>

      {/* TODO: can change to use icon arrows instead */}
      <div className="sort-buttons">
          <button onClick={() => setSortOrder('asc')}>Sort A-Z</button>
          <button onClick={() => setSortOrder('desc')}>Sort Z-A</button>
      </div>

      <ul className="company-list">
            {sortedCompanies.map(company => (
              <li key={company.id}>
                <span>{company.name}</span>
              </li>
            ))}
      </ul>
    </>
  )
}

export default App
