import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'

 import {fetchUserComment} from '../actions'

const CommentForm = props => {
    const commentState = useSelector(state => state.commentTest);
    const dispatch = useDispatch()

    const handleChange = e =>{
        props({...props, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        dispatch(fetchUserComment(3))
    }, [])
if(!commentState){
    return <h2>LOADING</h2>
}

    return(
        <div>
                <form onSubmit={props} key={props}>
                    <label htmlFor="title">Comment</label>
                        <input
                        type="text"
                        name="title"
                        id="title"
                         onChange={handleChange}
                        // value={props.title}
                        />
                    <label htmlFor="comment"></label>
                        <input
                        type ="text"
                        name="comment"
                        id="comment"
                         onChange={handleChange}
                        // value={props.comment}
                        />
                        <button>Submit</button>
                </form>
                {commentState.map(comment => {
                    return (
                    <div>
                        <p>{comment.comment_text}</p>
                    </div>
                )})}
            </div>
    )
    
}
export default CommentForm;