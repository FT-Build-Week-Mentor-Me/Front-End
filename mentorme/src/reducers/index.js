import { AUTHORIZING, LOGIN_SUCCESS } from "../actions";

const initialState = {
    mentor: [],
    mentee: false,
    // profile_type: !mentor === mentee,
    isFetching: false,
    fetchingMessage: '',
    error: null, 
    error_message:"",
    
    credentials: {
        username: '',
        email: '',
        password: ''
    }, 
}



const reducer = (state = initialState, action) => {

    switch(action.type){
        case AUTHORIZING:
            return{...state, isFetching: true, fetchingMessage: action.payload}
        case LOGIN_SUCCESS:
            console.log('Action for login', action)
            return{...state, isFetching: false, 
                credentials: {
                ...state.credentials,
                username: action.payload,
                email: action.payload,
                password: action.payload,
            }}
        default:
            return state
    }
}

export default reducer;