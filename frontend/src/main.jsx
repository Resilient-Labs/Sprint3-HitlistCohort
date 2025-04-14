import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import EditPage from './pages/Edit'
import HitlistPage from './pages/HitlistPage'
import ContactsPage from './pages/ContactsPage'
import NotFoundPage from './pages/NotFoundPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage.jsx'
import { AuthProvider } from './contexts/AuthContext'
import { DarkModeProvider } from './contexts/DarkModeContext.jsx'
import { CompanyProvider } from './contexts/CompanyContext'
import { Provider } from 'react-redux'
import store from './redux/store'
// import './GlobalStyles.css'

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
    {
        path: '/edit/:id',
        element: <EditPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/profile',
        element: <ProfilePage />,
        errorElement: <NotFoundPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <CompanyProvider>
                    {' '}
                    {/* AuthProvider should wrap RouterProvider */}
                    <DarkModeProvider>
                        <div>
                            <RouterProvider router={router} />
                        </div>
                    </DarkModeProvider>
                </CompanyProvider>
            </AuthProvider>
        </Provider>
    </StrictMode>
)
