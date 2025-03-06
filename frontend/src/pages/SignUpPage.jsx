import React, { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import { AuthContext } from '../contexts/AuthContext'
import { DarkModeContext } from '../contexts/DarkModeContext'

const SignUpPage = () => {
    const { darkMode } = useContext(DarkModeContext)
    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const local = 'http://localhost:3001/sign-up'

    const handleSubmit = async (e) => {
        e.preventDefault()

        const userData = {
            email,
            password,
            username,
        }

        try {
            const response = await fetch(local, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })

            if (response.ok) {
                // Handle successful response
                const data = await response.json()
                const token = data.token
                console.log(data)

                if (token) {
                    login(
                        token,
                        data.user.username,
                        'Account created successfully!',
                    ) // Save the token and update the authentication state
                } else {
                    console.error('No token found in the response')
                }
            } else {
                const errorMessage = await response.json()
                console.error('Error signing up:', errorMessage)
                alert(`Error signing up: ${errorMessage.message}`)
            }
        } catch (error) {
            console.error('Network error:', error)
            alert('Network error', error)
        }
    }

    return (
        <div
            style={{
                backgroundColor: darkMode ? '#A9A9A9' : '#ffffff',
                color: darkMode ? '#ffffff' : '#000000',
            }}
        >
            <Navbar />
            <div className="signup-container">
                <h2 className="signup-title">Sign Up</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            className="input-field"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Sign Up
                    </button>
                </form>
            </div>

            <style jsx>{`
                .signup-container {
                    max-width: 400px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #f8f8f8;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                .signup-title {
                    text-align: center;
                    font-size: 24px;
                    margin-bottom: 20px;
                    color: #333;
                }

                .signup-form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }

                label {
                    font-size: 14px;
                    color: #555;
                }

                .input-field {
                    padding: 10px;
                    font-size: 14px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    outline: none;
                    width: 100%;
                    box-sizing: border-box;
                }

                .input-field:focus {
                    border-color: #007bff;
                }

                .submit-button {
                    padding: 12px;
                    background-color: #007bff;
                    color: white;
                    font-size: 16px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .submit-button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    )
}

export default SignUpPage
