import { AUTHORIZING, 
        LOGIN_SUCCESS, 
        GET_COMMENT_START, 
        GET_COMMENT,
        GET_COMMENT_FAIL, 
        ADD_COMMENT_START, 
        ADD_COMMENT_SUCCESS
    } from "../actions";

const initialState = {
    mentor: [],
    questions: [],
    comments: [],
    addComment: {
        title: '',
        comment: ''
    }, 
    mentee: false,
    // profile_type: !mentor === mentee,
    isFetching: false,
    fetchingMessage: '',
    error: null, 
    error_message:"",
    commentTest: [],
    
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
        // case FETCHING_QUESTIONS:
        //     return{...state, isFetching: true, fetchingMessage: action.payload}
        // case FETCH_COMMENTS: 
        //     return{...state, comments: action.payload}
            case GET_COMMENT_START:
                return {
                    ...state,
                    error: '',
                    isFetching: true
                }
            case GET_COMMENT:
                return {
                    ...state,
                    error: '',
                    isFetching: false,
                    commentTest: action.payload
                }
            case GET_COMMENT_FAIL:
                return {
                    ...state,
                    error: action.payload,
                    isFetching: false
                }
            case ADD_COMMENT_START: 
                return {
                    ...state,
                    isFetching: true
                }
            case ADD_COMMENT_SUCCESS:
                return {
                    ...state, 
                }
        default:
            return state
    }
}

export default reducer;