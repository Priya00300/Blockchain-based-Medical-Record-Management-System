import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Registration'; // Import the Registration component
import Login from './Login'; // Import the Login component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h1>Healthcare Storage Platform</h1>
            <p>Welcome to the healthcare storage platform. Please navigate to the registration or login page.</p>
        </div>
    );
}

export default App;