import React from "react";

const CommentForm = props => {

    const handleChange = e =>{
        props({...props, [e.target.name]: e.target.value});
    }


    return(
        <div>
                <form onSubmit={props} key={props}>
                    <label htmlFor="title"></label>
                        <input
                        type="text"
                        name="title"
                        id="title"
                         onChange={handleChange}
                        // value={props.title}
                        />
                    <label htmlFor="question"></label>
                        <input
                        type ="text"
                        name="comment"
                        id="comment"
                         onChange={handleChange}
                        // value={props.comment}
                        />
                </form>
            </div>
    )
    
}
export default CommentForm;