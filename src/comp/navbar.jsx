import React from "react";

function NavBar()
{
    return (
        <nav className="myNav">
            <div className="navLeft">
                <a href="/">AD</a>
            </div>
            <div className="navRight">
                <a href="#footer">Contact</a>
            </div>
        </nav>
    );
}

export default NavBar;