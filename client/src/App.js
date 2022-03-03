import React, { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './utils/AppRoutes';

export const isAuthenticatedContext = React.createContext()
export const authenticateContext = React.createContext()

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') ? true : false);

    
    return (
        <BrowserRouter>
            <isAuthenticatedContext.Provider value={isAuthenticated}>
                <Header isAuthenticated={isAuthenticated} />
                <hr />  
                <authenticateContext.Provider value={setIsAuthenticated}>
                    <AppRoutes isAuthenticated={isAuthenticated} authenticate={setIsAuthenticated} />
                </authenticateContext.Provider>    
            </isAuthenticatedContext.Provider>
        </BrowserRouter>
    );
}

export default App;
