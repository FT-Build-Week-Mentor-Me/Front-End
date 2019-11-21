import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLink = () => {
    return (
        <ul className="right">
            <li><NavLink to={'/mentor'}>Questions</NavLink></li>
        </ul>
    )
}
export default SignedInLink;