import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from './SignedInLinks';
import SignedOutLink from './SignedOutLink';

const NavBar = () => {
    return (
        <nav className="nav-wrapper grey">
            <div className="container">
                <Link to='/' className="brand-logo center">MentorMe</Link>
                <SignedInLink />
                <SignedOutLink />
            </div>
        </nav>
    )
}
export default NavBar;