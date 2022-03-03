import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {isAuthenticatedContext, authenticateContext} from '../App'

const Logout = () => {

    
    const isAuthenticated = useContext(isAuthenticatedContext)
    const authenticate = useContext(authenticateContext)

    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) {
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('access_token');
            authenticate(false);
        }
        navigate('/login');
    })  

    return (
        <h1>Logging out</h1>
    )
}

export default Logout