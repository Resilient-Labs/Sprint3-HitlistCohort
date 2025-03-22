import './ContactList.css'
import React, { useState, useEffect } from 'react'
import contactsService from '../services/contacts'

const ContactList = () => {
    const [search, setSearch] = useState('')
    const [poc, setPoc] = useState('')
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [notes, setNotes] = useState('')
    const [url, setUrl] = useState('')
    const [contacts, setContacts] = useState([
        {
            id: 1,
            pointOfContacts: 'meep',
            name: 'Hi',
            status: 'meep',
            notes: 'notes',
            applicationURL: 'meep',
            edit: false,
        },
    ])

    useEffect(() => {
        contactsService
            .getAll()
            .then((data) => {
                setContacts(data || [])
            })
            .catch((error) => console.error('Error fetching companies:', error))
    }, [])

    const addContact = (e) => {
        e.preventDefault()

        if (contacts.find((e) => e.url === url)) {
            alert(`This job has already been added.`)
            setUrl('')
            return
        }

        const contactObject = {
            _id: id,
            pointOfContact: poc,
            name: name,
            status: status,
            notes: notes,
            applicationUrl: url,
            edit: false,
        }

        contacts.create(contactObject).then((returnedContact) => {
            setContacts(contacts.concat(returnedContact))
            setEditValues(contacts.concat(returnedContact))
            setPoc('')
            setName('')
            setStatus('')
            setNotes('')
            setUrl('')
        })
    }

    const removeContact = (id) => {
        return function (event) {
            event.preventDefault()
            contactService.remove(id)
        }
    }

    const editContact = (contact) => {
        return function (e) {
            e.preventDefault()

            const contactObject = {
                _id: contact.id,
                pointOfContact: contact.poc,
                name: contact.name,
                status: contact.status,
                notes: contact.notes,
                applicationUrl: contact.url,
                edit: true,
            }

            contacts.update(contactObject).then((returnedContact) => {
                setContacts(
                    contacts.map((item) =>
                        item.id === contactObject.id ? returnedContact : item
                    )
                )
            })
        }
    }

    const updateContact = (id) => {
        e.preventDefault()

        const contactObject = {
            pointOfContact: poc,
            name: name,
            status: status,
            notes: notes,
            applicationUrl: url,
            edit: false,
        }

        contacts.update(id, contactObject).then((returnedContact) => {
            setContacts(contacts.concat(returnedContact))
            setPoc('')
            setName('')
            setStatus('')
            setNotes('')
            setUrl('')
        })
    }

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
            <form onSubmit={addContact}>
                {' '}
                <input
                    type="text"
                    placeholder="Point of Contact"
                    value={poc}
                    onChange={(e) => setPoc(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Application URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <input type="submit" value="submit" />
            </form>
            <br />
            <input
                type="text"
                placeholder="Filter Contacts"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul className="contacts-list">
                {search ? ( // If user is searching, show filtered results
                    filteredContacts.length === 0 ? (
                        <li>No contacts found</li>
                    ) : (
                        filteredContacts.map((contact) =>
                            !contact.edit ? (
                                <li key={contact.id} className="contacts-items">
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
                                    <br />
                                    <button onClick={editContact(contact)}>
                                        Edit
                                    </button>
                                    <button onClick={removeContact(contact.id)}>
                                        Delete
                                    </button>
                                </li>
                            ) : (
                                <li key={contact.id}>
                                    <form
                                        className="contacts-items"
                                        onSubmit={updateContact(contact.id)}
                                    >
                                        <input
                                            type="text"
                                            placeholder="Point of Contact"
                                            value={poc}
                                            onChange={(e) =>
                                                setPoc(e.target.value)
                                            }
                                        />
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                        <input
                                            type="text"
                                            placeholder="Status"
                                            value={status}
                                            onChange={(e) =>
                                                setStatus(e.target.value)
                                            }
                                        />
                                        <input
                                            type="text"
                                            placeholder="Notes"
                                            value={notes}
                                            onChange={(e) =>
                                                setNotes(e.target.value)
                                            }
                                        />
                                        <input
                                            type="text"
                                            placeholder="Application URL"
                                            value={url}
                                            onChange={(e) =>
                                                setUrl(e.target.value)
                                            }
                                        />
                                        <input type="submit" value="submit" />
                                    </form>
                                </li>
                            )
                        )
                    )
                ) : // If no search input, show all contacts
                validContacts.length === 0 ? (
                    <li key={contact.id}>
                        No contacts with valid points of contact
                    </li>
                ) : (
                    validContacts.map((contact) =>
                        !contact.edit ? (
                            <li key={contact.id} className="contacts-items">
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
                                <br />
                                <button onClick={editContact(contact)}>
                                    Edit
                                </button>
                                <button onClick={removeContact(contact.id)}>
                                    Delete
                                </button>
                            </li>
                        ) : (
                            <li key={contact.id}>
                                <form
                                    className="contacts-items"
                                    onSubmit={updateContact(id)}
                                >
                                    <input
                                        type="text"
                                        placeholder="Point of Contact"
                                        value={poc}
                                        onChange={(e) => setPoc(e.target.value)}
                                    />
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Status"
                                        value={status}
                                        onChange={(e) =>
                                            setStatus(e.target.value)
                                        }
                                    />
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Notes"
                                        value={notes}
                                        onChange={(e) =>
                                            setNotes(e.target.value)
                                        }
                                    />
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Application URL"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
                                    <br />
                                    <input type="submit" value="submit" />
                                </form>
                            </li>
                        )
                    )
                )}
            </ul>
        </div>
    )
}

export default ContactList
