import React, {useEffect} from "react";

const Comments = (props, {comment_text, thread_id, author_id}) => {
    console.log('COMMENT PROPS', props)
    // useEffect(() => {

    // })

    // const trim = props.question;
    return(
        <div className="Comments" >
            <div className="card" >
                <section key={thread_id} >
                    <p>{comment_text}</p>
                </section>
            </div>
        </div>
    )
}
export default Comments;