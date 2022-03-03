import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../utils/apiCalls';
import {isAuthenticatedContext} from '../App'

const Products = () => {

    
    const isAuthenticated = useContext(isAuthenticatedContext)

    const [products, setProducts] = useState([]);

    const allProducts = products.map(product => (
            <ul key={product.id}>
                <li>{product.id}</li>
                <li>{product.name}</li>
                <li>{product.description}</li>
            </ul>
        )
    )
    
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }
        getProducts()
        .then(({data}) => {
            setProducts(data)
        })
        .catch(err => {
            navigate('/logout')
        })
    }, [isAuthenticated])

    return (
        <div>{allProducts}</div>
    )
}

export default Products