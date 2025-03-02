import React, { useState } from 'react';
import './SortColumn.css'; 

const SortColumn = ({ columnKey, onSortChange, label }) => {
    const [sortOrder, setSortOrder] = useState(null);

    const toggleSortOrder = () => {
        const newOrder = sortOrder === "asc" ? "desc" : "asc";
        setSortOrder(newOrder);
        onSortChange(columnKey, newOrder);
    }

    return (
        <span className="sortable-header" onClick={toggleSortOrder}>
            {label} 
            <span className="sort-icon">
                {sortOrder === "asc" ? "🔼" : sortOrder === "desc" ? "🔽" : "↕"}
            </span>
        </span>
    );
};

export default SortColumn;