import React, { useEffect } from "react";
import Card from "./Card";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import { connect } from 'react-redux';

import { fetchUserComment } from '../actions';

const Conversations = props => {

    // const thread = props.questions.find(
    //     findThread => findThread.id === Number(props.match.params.id)
    // )
    
    // const commentThread = props.comments.find(
    //     findThread => findThread.thread_id === Number(props.match.params.id)
    // )

    useEffect(() => {
        console.log('convo effect', props)
        props.fetchUserComment(3)
    }, [])

    console.log('PPID', props)
    
    return(

        <div className="Conversations">
            {/* <section className="convoQuestion">
            <Card
                        authorId={thread.author_id}
                        threadId={thread.id}
                        title={thread.thread_title}
                        content={thread.thread_body}
                        />
            </section> */}
            <section className="convoComments">
                <Comments
                comment_text={props.comment}
                // id={commentThread.id}
                />
            </section>
            <section>
                <CommentForm/>
            </section>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        comment: state.comment
    }
}


export default connect(mapStateToProps, { fetchUserComment })(Conversations);