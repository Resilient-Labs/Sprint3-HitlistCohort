import { useState } from 'react'
import './ContactList.css'
import React, { useState, useEffect } from 'react'
import contactsService from '../services/contacts'

const ContactList = () => {
    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState('')
     
    useEffect(() => {
        contactsService
            .getAll()
            .then((data) => {
                setContacts(data || [])
            })
            .catch((error) => console.error('Error fetching companies:', error))
    }, [])
  
    const processPointOfContacts = (pointOfContacts) => {
        if (!pointOfContacts) return []
        if (Array.isArray(pointOfContacts))
            return pointOfContacts.filter((name) => name.trim() !== '')
        if (typeof pointOfContacts === 'string')
            return pointOfContacts
                .split(',')
                .map((name) => name.trim())
                .filter((name) => name !== '')
        return []
    }

    const validContacts = contacts
        .map((contact) => ({
            ...contact,
            pointOfContacts: processPointOfContacts(contact.pointOfContacts),
        }))
        .filter((contact) => contact.pointOfContacts.length > 0)

    const filteredContacts = validContacts.filter((contact) =>
        contact.pointOfContacts.some((name) =>
            name.toLowerCase().includes(search.toLowerCase())
        )
    )
    return (
        <div>
            <h2 className="contacts-header">Points of Contact</h2>
            <input
                type="text"
                placeholder="Search contacts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul className="contacts-list">
                {search ? ( // If user is searching, show filtered results
                    filteredContacts.length === 0 ? (
                        <li>No contacts found</li>
                    ) : (
                        filteredContacts.map((contact) => (
                            <li key={contact._id} className="contacts-items">
                                <p>
                                    Point of Contact:{' '}
                                    {contact.pointOfContacts.join(', ')}
                                </p>
                                <strong>{contact.name}</strong>
                                <p>Status: {contact.status}</p>
                                <p>Notes: {contact.notes}</p>
                                <a
                                    href={contact.applicationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Application Link
                                </a>
                            </li>
                        ))
                    )
                ) : // If no search input, show all contacts
                validContacts.length === 0 ? (
                    <li>No contacts with valid points of contact</li>
                ) : (
                    validContacts.map((contact) => (
                        <li key={contact._id} className="contacts-items">
                            <p>
                                Point of Contact:{' '}
                                {contact.pointOfContacts.join(', ')}
                            </p>
                            <strong>{contact.name}</strong>
                            <p>Status: {contact.status}</p>
                            <p>Notes: {contact.notes}</p>
                            <a
                                href={contact.applicationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Application Link
                            </a>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default ContactList
