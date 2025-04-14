import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './Profile.css';

const Profile = () => {
    const { username, email } = useContext(AuthContext);

    if (!username || !email) return <p className="loading-message">Loading profile...</p>;

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h2>Profile</h2>
            </div>
            <div className="profile-info">
                <p>Username: <span>{username}</span></p>
                <p>Email: <span>{email}</span></p>
                <p>Joined: <span>{new Date().toLocaleDateString()}</span></p>
            </div>
        </div>
    );
};

export default Profile;
