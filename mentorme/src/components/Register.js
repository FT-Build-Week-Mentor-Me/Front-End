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
                console.log('Register Submit', res.data.password)
                localStorage.setItem('token', res.data.password)
                props.history.push('/mentor')
            })
            .catch(err => console.log('Register Error', err))
    }

    return (
        <div>
            <form onSubmit={submitRegister}>
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
                />
                <select>
                    <option value={props.profile_type}>Mentor</option>
                    <option value={props.profile_type}>Mentee</option>
                </select> 
                <button>Register</button>
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