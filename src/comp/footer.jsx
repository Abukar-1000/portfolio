import React from "react";
import Cube from "./cube"

function MyFooter()
{
    return (
        <div id="footer">
            <Cube />
            <div className="ContactLinks placeCenter">
                <a className="ConactItem" href="https://www.linkedin.com/in/abukar-djama-b16237240/">LinkedIn</a>
                <a className="ConactItem" href="https://github.com/Abukar-1000">GitHub</a>
                <a className="ConactItem" href="mailto:abukardjama1@gmail.com, adjama@iu.edu">Send Email</a>
            </div>
        </div>
    );
}

export default MyFooter;