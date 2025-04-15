// import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { useState } from 'react'
import DarkModeToggle from '../../src/components/DarkModeToggle'
import { DarkModeContext } from '../../src/contexts/DarkModeContext'

const MockDarkModeProvider = () => {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            <DarkModeToggle />
        </DarkModeContext.Provider>
    )
}

describe('DarkModeToggle component', () => {
    test('renders with correct initial text', () => {
        render(<MockDarkModeProvider />)
        expect(screen.getByText(/Switch to dark Mode/i)).toBeInTheDocument
    })

    test('toggles dark mode text when clicked', () => {
        render(<MockDarkModeProvider />)

        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(screen.getByText(/Switch to light Mode/i)).toBeInTheDocument
    })
})
