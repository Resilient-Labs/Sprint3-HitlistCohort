import './ContactList.css'
import React, { useState, useEffect } from 'react'
import contactsService from '../services/contacts'

const ContactList = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        contactsService
            .getAll()
            .then((data) => {
                setContacts(data || [])
            })
            .catch((error) => console.error('Error fetching companies:', error))
    }, [])
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
