import React, { useState, useEffect } from 'react'
import contactsService from '../services/contacts'
import companiesService from '../services/company'
import './ContactList.css'

const ContactList = () => {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [linkedIn, setLinkedIn] = useState('')
    const [company, setCompany] = useState('')
    const [lastContactDate, setLastContactDate] = useState('')

    const [search, setSearch] = useState('')
    const [contacts, setContacts] = useState([])
    const [companies, setCompanies] = useState([])

    const [editingContact, setEditingContact] = useState(null)

    useEffect(() => {
        contactsService
            .getAll()
            .then((data) => {
                setContacts(data || [])
            })
            .catch((error) => console.error('Error fetching contacts:', error))

        companiesService
            .getAll()
            .then((data) => {
                setCompanies(data || [])
            })
            .catch((error) => console.error('Error fetching companies:', error))
    }, [])

    const addContact = (e) => {
        e.preventDefault()

        if (contacts.find((c) => c.email === email)) {
            alert(`A contact with this email already exists.`)
            return
        }

        const contactObject = {
            name,
            role,
            email,
            linkedIn,
            company: company || null,
            lastContactDate: lastContactDate ? new Date(lastContactDate) : null,
        }

        contactsService
            .createContact(contactObject)
            .then((returnedContact) => {
                setContacts(contacts.concat(returnedContact))
                setName('')
                setRole('')
                setEmail('')
                setLinkedIn('')
                setCompany('')
                setLastContactDate('')
            })
            .catch((error) => {
                console.error('Error adding contact:', error)
                alert('Failed to add contact')
            })
    }

    const removeContact = (id) => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
            contactsService
                .deleteContact(id)
                .then(() => {
                    setContacts(contacts.filter((c) => c._id !== id))
                })
                .catch((error) => {
                    console.error('Error removing contact:', error)
                    alert('Failed to remove contact')
                })
        }
    }

    const startEditContact = (contact) => {
        setEditingContact(contact)

        setName(contact.name)
        setRole(contact.role)
        setEmail(contact.email)
        setLinkedIn(contact.linkedIn)
        setCompany(contact.company?._id || '')
        setLastContactDate(
            contact.lastContactDate
                ? new Date(contact.lastContactDate).toISOString().split('T')[0]
                : ''
        )
    }

    const updateContact = (e) => {
        e.preventDefault()

        if (!editingContact) return

        const updatedContactObject = {
            _id: editingContact._id,
            name,
            role,
            email,
            linkedIn,
            company: company || null,
            lastContactDate: lastContactDate ? new Date(lastContactDate) : null,
        }

        contactsService
            .updateContact(editingContact._id, updatedContactObject)
            .then((returnedContact) => {
                setContacts(
                    contacts.map((c) =>
                        c._id === returnedContact._id ? returnedContact : c
                    )
                )

                setEditingContact(null)
                setName('')
                setRole('')
                setEmail('')
                setLinkedIn('')
                setCompany('')
                setLastContactDate('')
            })
            .catch((error) => {
                console.error('Error updating contact:', error)
                alert('Failed to update contact')
            })
    }

    const filteredContacts = contacts.filter(
        (contact) =>
            contact.name.toLowerCase().includes(search.toLowerCase()) ||
            contact.email.toLowerCase().includes(search.toLowerCase()) ||
            contact.role.toLowerCase().includes(search.toLowerCase())
    )

    const formatLinkedInURL = (url) => {
        if (!url) return null

        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = `https://${url}`
        }

        if (!url.includes('linkedin.com/')) {
            url = `https://www.linkedin.com/in/${url}`
        }

        return url
    }

    return (
        <div className="contact-list-container">
            <h2 className="contact-list-header">Your Contacts</h2>

            <form onSubmit={editingContact ? updateContact : addContact}>
                <div className="form-row">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-row">
                    <input
                        type="text"
                        placeholder="LinkedIn Profile"
                        value={linkedIn}
                        onChange={(e) => setLinkedIn(e.target.value)}
                    />
                    <select
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    >
                        <option value="">Select Company</option>
                        {companies.map((comp) => (
                            <option key={comp._id} value={comp._id}>
                                {comp.name}
                            </option>
                        ))}
                    </select>
                    <input
                        type="date"
                        placeholder="Last Contact Date"
                        value={lastContactDate}
                        onChange={(e) => setLastContactDate(e.target.value)}
                    />
                </div>

                <button type="submit">
                    {editingContact ? 'Update Contact' : 'Add Contact'}
                </button>
                {editingContact && (
                    <button
                        type="button"
                        onClick={() => {
                            setEditingContact(null)
                            setName('')
                            setRole('')
                            setEmail('')
                            setLinkedIn('')
                            setCompany('')
                            setLastContactDate('')
                        }}
                    >
                        Cancel
                    </button>
                )}
            </form>

            <input
                type="text"
                placeholder="Search Contacts"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <table className="contacts-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>LinkedIn</th>
                        <th>Last Contacted</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredContacts.length === 0 ? (
                        <tr>
                            <td colSpan="6">No contacts found</td>
                        </tr>
                    ) : (
                        filteredContacts.map((contact) => (
                            <tr key={contact._id}>
                                <td>{contact.name}</td>
                                <td>{contact.role}</td>
                                <td>{contact.email}</td>
                                <td>
                                    {contact.linkedIn && (
                                        <a
                                            href={formatLinkedInURL(
                                                contact.linkedIn
                                            )}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {contact.linkedIn}
                                        </a>
                                    )}
                                </td>
                                <td>
                                    {contact.lastContactDate &&
                                        new Date(
                                            contact.lastContactDate
                                        ).toLocaleDateString()}
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            startEditContact(contact)
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() =>
                                            removeContact(contact._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ContactList
