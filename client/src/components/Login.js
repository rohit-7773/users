import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/apiCalls';

const Login = ({isAuthenticated, authenticate}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = event => {
        const {name, value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();
        login(formData  )
        .then(({data}) => {
                authenticate(true);
                localStorage.setItem('isAuthenticated', true);
                localStorage.setItem('access_token', data.access_token);
                setError('')
                navigate('/');  
        })
        .catch(err => {
            setError(err.response.data.message);
        })
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            {error}
            <br />
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

export default Login