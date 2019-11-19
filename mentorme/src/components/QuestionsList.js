import React from "react";
import Card from "./Card";
import {NavLink} from "react-router-dom";
import SearchForm from "./SearchForm";
import QuestionsForm from "./QuestionsForm";


const QuestionsList = props => {

const changeHandler = e =>{
    props.setQuery(e.target.value)
}

    return(

        <div className="questionListCont">
            <span>
               <SearchForm
               changeHandler={changeHandler}
               query={props.query} 
               /> 
            </span>
            <section className="questionList">
                {props.questions.map(question => {
                    return(
                        <QuestionLink 
                        key={question.id } 
                        question={question}                      
                        />
                    )
                })}
            </section>
            <section>
            {props.questions.map(question => {
                    return(
                        <QuestionsForm 
                        key={question.id } 
                        question={question}                    
                        />
                    )
                })}
                
            </section>

        </div>
    )
}


function QuestionLink  ({question}, props){

    const {author_id, id,thread_title, thread_body} = question;

        return(
            <div className="linkClass">
                <NavLink to ={`/questions/${id}`}>
                <div>
                <Card
                        authorId={author_id}
                        threadId={id}
                        title={thread_title}
                        content={thread_body}
                        />
                </div>
            </NavLink>
            </div>
            
        )
}

export default QuestionsList;