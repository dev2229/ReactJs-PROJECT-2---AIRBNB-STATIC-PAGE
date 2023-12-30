import React from "react";
import airbnbLogo from "../image/Airbnb-Logo-3.png";

export default function Navbar() {
    return (
        <nav className="nav-logo">
            <img src={airbnbLogo} alt="" />
        </nav>
    );
}