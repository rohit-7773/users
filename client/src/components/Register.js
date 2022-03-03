import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = ({isAuthenticated, authenticate}) => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: ''
    });

    const handleChange = event => {
        const {name, value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    })


    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='name' 
                name='name' 
                value={formData.name} 
                onChange={handleChange} 
            />
            <input 
                type='text' 
                placeholder='username' 
                name='username' 
                value={formData.username} 
                onChange={handleChange} 
            />
            <input 
                type='password' 
                placeholder='password' 
                name='password' 
                value={formData.password} 
                onChange={handleChange} 
            />
            <button>Login</button>
        </form>
    )
}

export default Register;