import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HitlistPage from './pages/HitlistPage'
import ContactsPage from './pages/ContactsPage'
import NotFoundPage from './pages/NotFoundPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './contexts/AuthContext'
import { DarkModeProvider } from './contexts/DarkModeContext.jsx'

import './GlobalStyles.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/hitlist',
        element: <HitlistPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/contacts',
        element: <ContactsPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/signup',
        element: <SignUpPage />,
        errorElement: <NotFoundPage />,
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            {' '}
            {/* AuthProvider should wrap RouterProvider */}
            <DarkModeProvider>
                <div>
                    <RouterProvider router={router} />
                </div>
            </DarkModeProvider>
        </AuthProvider>
    </StrictMode>
)
