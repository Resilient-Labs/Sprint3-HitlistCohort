import React, { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('jwtToken')
        const storedUsername = localStorage.getItem('userId')
        const storedEmail = localStorage.getItem('userEmail') 

        setIsAuthenticated(!!token) // Ensure boolean value
        setUsername(storedUsername)
        setEmail(storedEmail)

        setLoading(false)
    }, [])

    if (loading) {
        return null 
    }

    const logout = () => {
        try {
            // Clear storage and abort ongoing requests
            localStorage.removeItem('jwtToken')
            localStorage.removeItem('userId')
            localStorage.removeItem('userEmail') 
            setIsAuthenticated(false)

            setTimeout(() => (window.location.href = '/login'), 1000)
        } catch (error) {
            console.error('Logout error:', error)
            alert('error', 'Failed to log out. Please try again.')
        }
    }

    const login = (token, username, email) => {
        try {
            localStorage.setItem('jwtToken', token)
            localStorage.setItem('userId', username)
            localStorage.setItem('userEmail', email) 

            setIsAuthenticated(true)
            setUsername(username)
            setEmail(email)

            setTimeout(() => (window.location.href = '/'), 1000)
        } catch (error) {
            console.error('Login error:', error)
            alert('error', 'Failed to log in. Please try again.')
        }
    }

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, login, logout, username, email }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
