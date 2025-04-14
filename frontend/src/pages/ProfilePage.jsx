import Navbar from '../components/Navbar'
import Profile from '../components/profile/Profile'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import LoginPage from './LoginPage'

const ProfilePage = () => {
    const { isAuthenticated } = useContext(AuthContext)

    if (!isAuthenticated) return <LoginPage />

    return (
        <>
            <Navbar />
            <Profile />
        </>
    )
}

export default ProfilePage
