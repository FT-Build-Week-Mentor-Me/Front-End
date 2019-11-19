import React, { useState } from 'react';
import { connect } from 'react-redux';

import { axiosWithAuth } from '../utils';
<<<<<<< HEAD
import { loginUser } from '../actions';


=======
import {Link} from 'react-router-dom';
>>>>>>> 7ce1b0e953f6df814b7d8c1df5daacf484179053


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
        console.log("this is props", props)
        e.preventDefault();
        props.loginUser(input, props);
        // axiosWithAuth()
        //     .post('/login', input)
        //     .then(res => {
        //         console.log('Login Submit', res.data.token)
        //         localStorage.setItem('token', res.data.token)
        //         props.history.push('/mentor')
        //     })
        //     .catch(err => console.log('Login Error', err))
    }

    return (
        <div>
            <form onSubmit={submitLogin}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={props.username}
                    onChange={changeHandler}
                />
                <h2>OR</h2>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={props.email}
                    onChange={changeHandler}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={props.password}
                    onChange={changeHandler}
                />
                <button>Login</button>
            </form>
            <button> 
                <Link to={"/register"}> Register With Us!</Link>
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('MSTP LOGIN', state)
    return {
        credentials: {
            username: state.credentials.username,
            email: state.credentials.email,
            password: state.credentials.password
        } 
    }
}

export default connect(mapStateToProps, {loginUser})(Login);