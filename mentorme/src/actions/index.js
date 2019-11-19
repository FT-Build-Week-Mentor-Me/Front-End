import {axiosWithAuth} from '../utils';
export const AUTHORIZING = "AUTHORIZING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const GET_COMMENT_START = "GET_COMMENT_START"
export const GET_COMMENT = "GET_COMMENT"


export const GET_COMMENT_FAIL = 'GET_COMMENT_FAIL'

export const FETCHING_QUESTIONS = "FETCHING_QUESTIONS";
// GET ACTIONS
export const getQuestions = (questions) => dispatch => {
    dispatch({ type: FETCHING_QUESTIONS, payload: "Gathering Questions"})
    axiosWithAuth().get('/threads', questions)
        .then(res => {
            console.log('Question Res', res)
        })
        .catch(err => console.log("Question Err", err))
}

export const fetchUserComment = (id) => dispatch => {
    console.log('Fetch User Comment', id)
    axiosWithAuth().get(`/comments/${id}`)
        .then(res => {
            console.log("FETCH User Res", res.data)
            dispatch({ type: GET_COMMENT, payload: res.data})
        })
        .catch(err => console.log("Question Err", err))
}

export const fetchUserComment = (id) = dispatch => {
    dispatch({type: GET_COMMENT_START })
    axiosWithAuth()
        .get(`/comments/${id}`)
            .then(res => {
                dispatch({ type: GET_COMMENT, payload: res.data})
            })
            .catch( err => {
                dispatch({ type: GET_COMMENT_FAIL, payload: err.response})
            })
}

// POST ACTIONS
export const loginUser = (user, props) => dispatch => {
    dispatch({ type: AUTHORIZING, payload: "Logging In..."})
    axiosWithAuth()
        .post('/login', user)
        .then(res => {
            console.log('Login Submit', res)
            localStorage.setItem('token', res.data.token)
            props.history.push(`/comments`)
            dispatch({type: LOGIN_SUCCESS, payload: "Logged In"})
        })
        .catch(err => console.log('Login Error', err))
}

// DELETE ACTIONS


