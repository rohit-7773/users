import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../utils/apiCalls';


const Register = ({isAuthenticated, authenticate}) => {
    const [formData, setFormData] = useState({
        name: '',
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

    const handleSubmit = event => {
        event.preventDefault();
        register(formData)
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

    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    })


    return (
        <>
            {error}
            <br />
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
                <button>Register</button>
            </form>
        </>
    )
}

export default Register;