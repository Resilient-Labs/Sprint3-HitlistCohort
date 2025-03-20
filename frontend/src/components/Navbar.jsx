import { NavLink, Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { DarkModeContext } from '../contexts/DarkModeContext'
import './Navbar.css'
import DarkModeToggle from './DarkModeToggle'

const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext)
    const { darkMode, setDarkMode } = useContext(DarkModeContext)

    return (
        <div className="navbar-container">
            <div className="navbar-title">
                <Link to="/">
                    <h1 style={{ color: darkMode ? 'white' : 'black' }}>
                        Job Hitlist
                    </h1>
                </Link>
            </div>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="navbar-items">
                <ul className="navbar-ul">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'highlight' : ''
                        }
                        style={{ color: darkMode ? 'white' : 'black' }}
                    >
                        <li>Home</li>
                    </NavLink>
                    <NavLink
                        to="/hitlist"
                        className={({ isActive }) =>
                            isActive ? 'highlight' : ''
                        }
                        style={{ color: darkMode ? 'white' : 'black' }}
                    >
                        <li>Hitlist</li>
                    </NavLink>
                    <NavLink
                        to="/contacts"
                        className={({ isActive }) =>
                            isActive ? 'highlight' : ''
                        }
                        style={{ color: darkMode ? 'white' : 'black' }}
                    >
                        <li>Contacts</li>
                    </NavLink>

                    {!isAuthenticated ? (
                        <>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? 'highlight' : ''
                                }
                                style={{ color: darkMode ? 'white' : 'black' }}
                            >
                                <li>Login</li>
                            </NavLink>
                            <NavLink
                                to="/signup"
                                className={({ isActive }) =>
                                    isActive ? 'highlight' : ''
                                }
                                style={{ color: darkMode ? 'white' : 'black' }}
                            >
                                <li>Sign Up</li>
                            </NavLink>
                        </>
                    ) : (
                        <li
                            onClick={logout}
                            className="logout-button"
                            style={{
                                cursor: 'pointer',
                                color: darkMode ? 'white' : 'black',
                            }}
                        >
                            Logout
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
