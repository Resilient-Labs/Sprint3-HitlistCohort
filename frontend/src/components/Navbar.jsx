import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import './Navbar.css';

const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <div className="navbar-container">
            <div className="navbar-title">
                <Link to="/">
                    <h1>Job Hitlist</h1>
                </Link>
            </div>
            <div className="navbar-items">
                <ul className="navbar-ul">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'highlight' : '')}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/hitlist" className={({ isActive }) => (isActive ? 'highlight' : '')}>
                        <li>Hitlist</li>
                    </NavLink>
                    <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'highlight' : '')}>
                        <li>Contacts</li>
                    </NavLink>

                    {!isAuthenticated ? (
                        <>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? 'highlight' : '')}>
                                <li>Login</li>
                            </NavLink>
                            <NavLink to="/signup" className={({ isActive }) => (isActive ? 'highlight' : '')}>
                                <li>Sign Up</li>
                            </NavLink>
                        </>
                    ) : (
                        <li onClick={logout} className="logout-button" style={{ cursor: 'pointer' }}>
                            Logout
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
