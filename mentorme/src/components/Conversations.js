import React from "react";
import Card from "./Card";
import Comments from "./Comments";
import CommentForm from "./CommentForm";


const Conversations = props => {

    const thread = props.questions.find(
        findThread => findThread.id === Number(props.match.params.id)
    )
    
    const commentThread = props.comments.find(
        findThread => findThread.thread_id === Number(props.match.params.id)
    )
    
    return(

        <div className="Conversations">
            <section className="convoQuestion">
            <Card
                        authorId={thread.author_id}
                        threadId={thread.id}
                        title={thread.thread_title}
                        content={thread.thread_body}
                        />
            </section>
            <section className="convoComments">
                <Comments
                comment_text={commentThread.comment_text}
                id={commentThread.id}
                />
            </section>
            <section>
                <CommentForm/>
            </section>

        </div>
    )
}
export default Conversations;