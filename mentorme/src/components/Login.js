import React, { useState } from 'react';
import { axiosWithAuth } from '../utils';
import { Link } from 'react-router-dom';


const Login = (props) => {
    // console.log(props)
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
        <div className="container">
            <form onSubmit={submitLogin} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={input.username}
                    onChange={changeHandler}
                />
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
                <button className="btn grey z-depth-0">Login</button>
            </form>
            <button className="btn grey z-depth-0"> 
                <Link to={"/register"}> Register With Us!</Link>
            </button>
        </div>
    )
}

export default Login;