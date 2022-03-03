import { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './utils/AppRoutes';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') ? true : false);

    return (
        <BrowserRouter>
            <div>
                <Header isAuthenticated={isAuthenticated} />
                <hr />      
                <AppRoutes isAuthenticated={isAuthenticated} authenticate={setIsAuthenticated} />
            </div>
        </BrowserRouter>
    );
}

export default App;
