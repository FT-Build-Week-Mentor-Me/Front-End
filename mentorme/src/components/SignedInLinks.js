import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const SignedInLink = () => {
    return (
        <Link to='/mentor' >
            <ul className="right">
                <li>Questions</li>
            </ul>
        </Link>
    )
}
export default SignedInLink;