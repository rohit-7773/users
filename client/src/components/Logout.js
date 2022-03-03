import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({isAuthenticated, authenticate}) => {

    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) {
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('access_token');
            authenticate(false);
        }
        navigate('/');
    })

    return (
        <h1>Logging out</h1>
    )
}

export default Logout