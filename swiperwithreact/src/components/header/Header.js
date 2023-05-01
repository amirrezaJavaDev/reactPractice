import React from "react";
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = ()=>{
    return(
        <>
            <div className="navbar">
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/news">
                            News
                        </NavLink>
                    </li>
                    <li>Product</li>
                </ul>
            </div>
        </>
    );
}
export default Header;