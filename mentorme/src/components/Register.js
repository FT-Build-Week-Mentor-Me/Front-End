import React, { useState } from 'react';
import { axiosWithAuth } from '../utils';
import { connect } from 'react-redux';


const Register = (props) => {
    // console.log(props)
    const [credentials, setCredentials] = useState({
        username:'',
        email: '',
        password: '',
        profile_type: 'mentor'

    });

    const changeHandler = e => {
        setCredentials({
            ...credentials,
            [e.target.name]:e.target.value
        })
    }

    const submitRegister = e => {
        e.preventDefault();
        console.log('input in submit', credentials)
        axiosWithAuth()
            .post('/register', credentials)
            .then(res => {
                console.log('Register Submit', res)
                localStorage.setItem('username', res.data.username)
                localStorage.setItem('password', res.data.password)
                localStorage.setItem('email', res.data.email)
                props.history.push('/')
            })
            .catch(err => console.log('Register Error', err))
    }

    return (
        <div className="container">
            <form onSubmit={submitRegister}>
                <h5>Register With Us!</h5>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={props.username}
                    onChange={changeHandler}
                    required
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={props.email}
                    onChange={changeHandler}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={props.password}
                    onChange={changeHandler}
                    required
                />
                <select>
                    <option value={props.profile_type}>Mentor</option>
                    <option value={props.profile_type}>Mentee</option>
                </select> 
                <button className="btn grey">Register</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        credentials: {
            username: state.credentials.username,
            email: state.credentials.email,
            password: state.credentials.password,
            profile_type: state.credentials.profile_type
        } 
    }
}

export default connect(mapStateToProps, {})(Register);