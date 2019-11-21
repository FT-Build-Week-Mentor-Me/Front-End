import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLink = () => {
    return (
        <ul className="right">
            <li><NavLink to={'/login'}>Sign In</NavLink></li>
            <li><NavLink to={'/register'}>Register</NavLink></li>
        </ul>
    )
}
export default SignedOutLink;