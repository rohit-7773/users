import axios from 'axios';

const baseURL = 'http://localhost:8000'
const api1 = axios.create({baseURL})

export const login = data => api1.post('/login', data);
export const register = data => api1.post('/register', data);

const api2 = axios.create({baseURL})

api2.interceptors.request.use(request => {
    request.headers = {
        ...request.headers,
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
    return request
})

export const getProducts = () => api2.get('/products')