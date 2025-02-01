import React from 'react';

function Registration() {
    return (
        <div>
            <h1>Doctor Registration</h1>
            <form id="registration-form" onSubmit={handleRegistration}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                
                <label htmlFor="patient-details">Patient Details:</label>
                <textarea id="patient-details" name="patient-details" required></textarea>
                
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

function handleRegistration(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const patientDetails = document.getElementById('patient-details').value;

    // Add your registration logic here (e.g., API call to register the doctor)
    console.log('Registration data:', { name, email, password, patientDetails });
}

export default Registration;
