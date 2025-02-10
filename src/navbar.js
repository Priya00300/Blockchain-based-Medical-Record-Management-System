import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ backgroundColor: "#35424a", padding: "10px" }}>
            <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
                <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
                <li><Link to="/registration" style={{ color: "white", textDecoration: "none" }}>Doctor Registration</Link></li>
                <li><Link to="/login" style={{ color: "white", textDecoration: "none" }}>Patient Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
