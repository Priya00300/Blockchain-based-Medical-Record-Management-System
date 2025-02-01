import React from 'react';

function Login() {
    return (
        <div>
            <h1>Patient Login</h1>
            <form id="login-form" onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Add your login logic here (e.g., API call to log in the patient)
    console.log('Login data:', { email, password });
}

export default Login;
