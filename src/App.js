import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home"; // Ensure Home.js exists
import Registration from "./Registration";
import Login from "./Login";
import Navbar from "./navbar"; // Ensure correct case

function App() {
    return (
        <Router>
            <Navbar /> {/* Navbar will be visible on all pages */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;