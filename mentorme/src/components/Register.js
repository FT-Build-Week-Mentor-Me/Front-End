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
        <div className="container">
            <form onSubmit={submitRegister} className="white">
            <h5 className="grey-text text-darken-3">Register with Us!</h5>
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
                <button className="btn grey z-depth-0">Register</button>
            </form>
        </div>
    )
}

export default Register;