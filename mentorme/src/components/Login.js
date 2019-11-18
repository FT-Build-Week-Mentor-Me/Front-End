import React, { useState } from 'react';
import { axiosWithAuth } from '../utils';

const Login = () => {
    const [input, setInput] = useState({
        username:'',
        password: ''
    });

    const changeHandler = e => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const submitLogin = e => {
        e.preventDefault();

    }

    return (
        <div>
            <form onSubmit={submitLogin}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={input.username}
                    onChange={changeHandler}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={input.password}
                    onChange={changeHandler}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;