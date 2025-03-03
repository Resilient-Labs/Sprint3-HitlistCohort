const DarkModeToggle = ({ darkMode, setDarkMode }) => {
    return (
        <div>
            <button
                onClick={() => setDarkMode(!darkMode)}
                style={{
                    background: '#313f58',
                    border: '1px solid #313f58',
                    cursor: 'pointer',
                    padding: '10px',
                    color: 'white',
                }}
            >
                {darkMode ? 'Switch to dark Mode' : 'Switch to light Mode'}
            </button>
        </div>
    )
}

export default DarkModeToggle
