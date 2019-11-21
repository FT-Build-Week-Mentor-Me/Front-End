import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import SignedInLink from './SignedInLinks';
import SignedOutLink from './SignedOutLink';
import Login from './Login'


const NavBar = (props) => {
    return (
        <nav className="nav-wrapper grey">
            <div className="container">
                <Link to="/" className="logo">MentorMe</Link>
                <SignedInLink />
                <SignedOutLink />
            </div>
        </nav>
        
    )
}
export default NavBar;