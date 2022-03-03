import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({isAuthenticated}) => {
  return (
    <div>
        <h1>Header</h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            {
                !isAuthenticated && 
                <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </>
            }
            { isAuthenticated && <li><Link to='/logout'>Logout</Link></li> }
        </ul>
    </div>
  )
}

export default Header