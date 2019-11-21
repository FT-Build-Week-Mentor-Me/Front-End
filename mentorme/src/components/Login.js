import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

import { axiosWithAuth } from '../utils';
import { loginUser } from '../actions';




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
        <div className="container">
            <form onSubmit={submitLogin} className="white">
                <h5 className="grey-text">Login</h5>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={props.username}
                    onChange={changeHandler}
                    
                />
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
                    required
                />
                <button className="btn grey">Login</button>
            </form>
            <button className="btn grey white-text"> 
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