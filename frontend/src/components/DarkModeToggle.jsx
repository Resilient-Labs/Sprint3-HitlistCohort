import { useContext } from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext'
const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext)

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode)
    }

    return (
        <div>
            <button
                onClick={toggleDarkMode}
                style={{
                    background: '#313f58',
                    border: '1px solid #313f58',
                    cursor: 'pointer',
                    padding: '10px',
                    color: 'white',
                }}
            >
                {darkMode ? 'Switch to light Mode' : 'Switch to dark Mode'}
            </button>
        </div>
    )
}

export default DarkModeToggle
