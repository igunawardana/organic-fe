import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="nav-wrapper green lighten-2">
            <div className="container">
                <a className="brand-logo left">
                    <Link to="/">Orga</Link>
                </a>
                <ul className="right">
                    <li><Link to="/market">Market</Link></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/settings">Settings</NavLink></li>
                </ul>
            </div>
        </nav>
    )

}

export default withRouter(Navbar);