import React, { createContext, useState, useEffect, useRef } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('jwtToken')

        setIsAuthenticated(!!token) // Ensure boolean value
        setLoading(false)
    }, [])

    if (loading) {
        return null
    }

    const logout = () => {
        try {
            // Clear storage and abort ongoing requests
            localStorage.removeItem('jwtToken')
            setIsAuthenticated(false)

            setTimeout(() => (window.location.href = '/login'), 1000)
        } catch (error) {
            console.error('Logout error:', error)
            alert('error', 'Failed to log out. Please try again.')
        }
    }

    const login = (token, username) => {
        try {
            localStorage.setItem('jwtToken', token)
            localStorage.setItem('userId', username)

            setIsAuthenticated(true)
            setTimeout(() => (window.location.href = '/'), 1000)
        } catch (error) {
            console.error('Login error:', error)
            alert('error', 'Failed to log in. Please try again.')
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
