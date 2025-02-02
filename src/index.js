import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this is correct
import App from './App'; // Ensure this is correct
import './styles.css'; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);