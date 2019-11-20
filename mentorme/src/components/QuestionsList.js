import React, { useState, useEffect }from "react";
import SearchForm from "./SearchForm";
import { axiosWithAuth } from "../utils";

// COMPONENTS
import Card from "./Card";
import QuestionsForm from './QuestionsForm'


const QuestionsList = props => {
    const[question, setQuestion] = useState({
        questions: []
    })

    

    useEffect(() => {
        console.log('in useEffect', question)
        axiosWithAuth()
            .get('/threads', question)
            .then(res => {
                console.log("Question Link Res", res.data)
                setQuestion({questions: res.data})
            })
            .catch(err => console.log("Link Error", err.response))
    }, [])
    

    const removeQuestion = input => {
        console.log("this is id", question.questions)

        // const trim = question.questions;
        axiosWithAuth()
            .delete(`/${input.id}/thread`, question)
            .then(res => {
                console.log('DELETE IS WORKING', res)
                setQuestion(question.questions.filter(click => click.id !== input.id))
            })
            .catch(err => console.log('DELETE ERROR', err.response))
    }

    const changeHandler = e =>{
        // console.log('change handler props', props)
        props.setQuery(e.target.value)
    }

    console.log("Question List props",props)

    return(
        <div className="questionListCont">
            <QuestionsForm />
            <span>
               <SearchForm
               changeHandler={changeHandler}
               query={props.query} 
               setQuery={props.setQuery}
               /> 
            </span>
            <section className="questionList">
                {question.questions.map(thing => {
                    // console.log('This is thing', thing)
                    return(
                        <div key={thing.id}>
                            <Card questions={thing} />
                            <button onClick={() => removeQuestion(thing)}> 
                                Remove Question
                            </button>
                        </div>
                        // <QuestionLink 
                        // key={questions.id } 
                        // question={questions}                      
                        // />
                    )
                })}
            </section>
        </div>
    )
}


// function QuestionLink  ({question}, props){

//     const {author_id, id,thread_title, thread_body} = question;

//     useEffect(() => {
//         axiosWithAuth()
//             .get('/threads', question)
//             .then(res => console.log("Question Link Res", res))
//             .catch(err => console.log("Link Error", err.response))
//     })
//         return(
//             <div className="linkClass">
//             <NavLink to ={`/questions/${id}`}>
//                 <div>
//                 <Card
//                         authorId={author_id}
//                         threadId={id}
//                         title={thread_title}
//                         content={thread_body}
//                         />
//                 </div>
//             </NavLink>
//             </div>
            
//         )
// }

export default QuestionsList;