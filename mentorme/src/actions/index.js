import {axiosWithAuth} from '../utils';

export const AUTHORIZING = "AUTHORIZING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
// GET ACTIONS


// POST ACTIONS
export const loginUser = (user, props) => dispatch => {
    dispatch({ type: AUTHORIZING, payload: "Logging In..."})
    axiosWithAuth()
        .post('/login', user)
        .then(res => {
            console.log('Login Submit', res.data.token)
            localStorage.setItem('token', res.data.token)
            props.history.push('/mentor')
            dispatch({type: LOGIN_SUCCESS, payload: "Logged In"})
        })
        .catch(err => console.log('Login Error', err))
}

// DELETE ACTIONS


