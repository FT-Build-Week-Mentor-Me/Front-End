import React, { useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { connect } from 'react-redux';

import { addComment } from '../actions';

 import {fetchThreadComments} from '../actions'

const CommentForm = props => {
    const commentState = useSelector(state => state.commentTest);
    const dispatch = useDispatch()
    
    const user_id = localStorage.getItem('user_id')
    const parsed_id = parseInt(user_id, 10)


    const [comment, setComment] = useState({
        comment_text:'',
        thread_id: 2,
        author_id: parsed_id
    });

    console.log('COMMENT', comment)


    const handleChange = e =>{
        setComment({
            ...comment,
            [e.target.name]:e.target.value
        });
    }

    useEffect(() => {
        dispatch(fetchThreadComments())
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
        <div className="container">
                <form onSubmit={submitComment}>
                    <label htmlFor="comment"></label>
                    <input
                        type="text"
                        name="comment_text"
                        placeholder="Comment"
                        value={props.comment}
                        onChange={handleChange}
                    />
                        <button className="btn">Submit</button>
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