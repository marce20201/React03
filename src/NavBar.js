import React, { useState } from 'react'

function NavBar() {
    const [open, setOpen] = useState( false );


    return (
        <div>
            <nav>
                <div className="logo">React nav</div>
                <ul className="nav-links"
                 style={{ transform: open ? "translateX(0px)" : "translateX(-500px)"}}>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Product</a>
                    </li>
                    <li>
                        <a>Service</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
                <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
            </nav>
        </div>
    )
}

export default NavBar
