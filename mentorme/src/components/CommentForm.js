import React, { useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { connect } from 'react-redux';

import { addComment } from '../actions';

 import {fetchUserComment} from '../actions'

const CommentForm = props => {
    const commentState = useSelector(state => state.commentTest);
    const dispatch = useDispatch()
    
    const [comment, setComment] = useState({
        comment_text:'',
        thread_id: 2,
        author_id: 4
    });



    const handleChange = e =>{
        setComment({
            ...comment,
            [e.target.name]:e.target.value
        });
    }

    useEffect(() => {
        dispatch(fetchUserComment(3))
    }, [])
// if(!commentState){
//     return <h2>LOADING</h2>
// }

    const submitComment = e => {
        console.log('it worked')
        e.preventDefault();
        props.addComment(comment);
    }

    return(
        <div>
                <form onSubmit={submitComment}>
                    <label htmlFor="comment"></label>
                    <input
                        type="text"
                        name="comment_text"
                        placeholder="Comment"
                        value={props.comment}
                        onChange={handleChange}
                    />
                        <button>Submit</button>
                </form>
                {commentState.map(comments => {
                    return (
                    <div key={comments.id}>
                        <p>{comments.comment_text}</p>
                    </div>
                )})}
            </div>
    )
}

const mapStateToProps = state => {
    console.log('MSTP COMMENT', state)
    return {
        addComment: {
            comment: state.addComment.comment
        }
    }
}
export default connect(mapStateToProps, {addComment})(CommentForm);