import './ContactList.css'
import React, { useState, useEffect } from "react";
import contactsService from "../services/contacts";

const ContactList = ( {contacts} ) => {
    // tbd: implementing contactsService to fetch Point of Contact data whenever this component loads (instead of passing 'contacts' as prop from App.jsx and receiving above)

    return (
        <div>
            <h2 className="contacts-header">Points of Contact</h2>
            <ul className="contacts-list">
                {contacts.map((person, index) => (
                    <li key={index} className="contacts-items">
                        {person}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList
