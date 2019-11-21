import React, { useEffect } from "react";
import Card from "./Card";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import { connect } from 'react-redux';

import CommentCard from './CommentCard';

import { fetchThreadComments } from '../actions';

const Conversations = props => {

    const thread = props.questions.find(
        findThread => findThread.id === Number(props.match.params.id)
    )
    
    // const commentThread = props.comments.find(
    //     findThread => findThread.thread_id === Number(props.match.params.id)
    // )

    useEffect(() => {
        console.log('convo effect', props)
        props.fetchThreadComments(props.match.params.id)
    }, [])

    console.log('PPID', props)
    
    return(

        <div className="Conversations">
            <section className="convoQuestion">
            <CommentCard
                id={props.id}
                thread_title={props.thread_title}
                thread_body={props.thread_body}
                business_type={props.business_type}
            />
            </section>
            <section className="convoComments">
            <Comments
                comment_text={props.comment_text}
                thread_id={props.thread_id}
                author_id={props.author_id}
            />
            </section>
            <section>
                <CommentForm
                
                />
            </section>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        comment: state.comment
    }
}


export default connect(mapStateToProps, { fetchThreadComments })(Conversations);