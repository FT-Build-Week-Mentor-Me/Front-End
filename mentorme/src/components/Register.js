import React, { useState } from 'react';
import { axiosWithAuth } from '../utils';


const Register = (props) => {
    // console.log(props)
    const [input, setInput] = useState({
        username:'',
        email: '',
        password: '',

    });

    const changeHandler = e => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const submitRegister = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/register', input)
            .then(res => {
                console.log('Register Submit', res.data.token)
                localStorage.setItem('token', res.data.token)
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
                <select>
                    <option value="mentor">Mentor</option>
                    <option value="mentee">Mentee</option>
                </select> 
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register;