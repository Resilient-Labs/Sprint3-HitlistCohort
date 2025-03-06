import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext'

const NotFoundPage = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div
            style={{
                backgroundColor: darkMode ? '#A9A9A9' : '#ffffff',
                color: darkMode ? '#ffffff' : '#000000',
            }}
        >
            <Navbar />
            <div>NotFound Page</div>
        </div>
    )
}

export default NotFoundPage
