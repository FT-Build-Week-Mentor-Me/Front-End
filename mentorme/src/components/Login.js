import React, { useState } from 'react';
import { axiosWithAuth } from '../utils';


const Login = (props) => {
    console.log(props)
    const [input, setInput] = useState({
        username:'',
        email: '',
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
        axiosWithAuth()
            .post('/login', input)
            .then(res => {
                console.log('Login Submit', res.data.token)
                localStorage.setItem('token', res.data.token)
                props.history.push('/mentor')
            })
            .catch(err => console.log('Login Error', err))
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
                <h2>OR</h2>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={input.email}
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