import React from 'react'
import Main from '../components/Main'
import Login from '../components/Login'
import Register from '../components/Register'
import { Routes, Route } from 'react-router-dom'
import Logout from '../components/Logout'
import Products from '../components/Products'

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/products' element={<Products />} />
        </Routes>
    )
}

export default AppRoutes