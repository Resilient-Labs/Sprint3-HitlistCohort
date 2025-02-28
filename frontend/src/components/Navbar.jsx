import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const navBarItems = [
        { id: 1, title: 'Home' },
        { id: 2, title: 'Hitlist' },
        { id: 3, title: 'Contacts' },
        { id: 4, title: 'Login' },
        { id: 5, title: 'Sign Up' },
    ]
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-title">
                    <Link to="/">
                        <h1>Job Hitlist</h1>
                    </Link>
                </div>
                <div className="navbar-items">
                    <ul className="navbar-ul">
                        {navBarItems.map((item) => (
                            <NavLink
                                className={({ isActive }) => {
                                    return isActive ? 'highlight' : ''
                                }}
                                to={
                                    item.title === 'Home'
                                        ? '/'
                                        : `/${item.title
                                              .toLowerCase()
                                              .split(' ')
                                              .join('')}`
                                }
                                key={item.id}
                            >
                                <li>{item.title}</li>
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
