import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul style={{ display: "flex", width: "50%", justifyContent: "space-between" }}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"about"}>About</Link></li>
                <li><Link to={"contactpage"}>Contact</Link></li>

            </ul>
        </div>
    )
}

export default Navbar