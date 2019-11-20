import React, { useState, useEffect }from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";
import { axiosWithAuth } from "../utils";


const QuestionsList = props => {
    const[question, setQuestion] = useState({
        questions: []
    })

    console.log(question)

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

    // const changeHandler = e =>{
    //     setQuestion(e.target.value)
    // }

    return(

        <div className="questionListCont">
            {/* <span>
               <SearchForm
               changeHandler={changeHandler}
               query={question.query} 
               /> 
            </span> */}
            <section className="questionList">
                {question.questions.map(thing => {
                    console.log('This is thing', thing)
                    return(
                        <Card questions={thing} key={thing.id}/>
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