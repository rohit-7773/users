import React from 'react'
import Main from '../components/Main'
import Login from '../components/Login'
import Register from '../components/Register'
import { Routes, Route } from 'react-router-dom'
import Logout from '../components/Logout'

const AppRoutes = ({isAuthenticated, authenticate}) => {
    return (
        <Routes>
            <Route exact path='/' element={<Main isAuthenticated={isAuthenticated} />} />
            <Route path='/login' element={<Login isAuthenticated={isAuthenticated} authenticate={authenticate} />} />
            <Route path='/register' element={<Register isAuthenticated={isAuthenticated} authenticate={authenticate} />} />
            <Route path='/logout' element={<Logout isAuthenticated={isAuthenticated} authenticate={authenticate} />} />
        </Routes>
    )
}

export default AppRoutes