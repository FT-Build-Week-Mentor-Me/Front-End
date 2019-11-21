import React, { useState, useEffect }from "react";
import SearchForm from "./SearchForm";
import { axiosWithAuth } from "../utils";
import {NavLink} from 'react-router-dom'
// COMPONENTS
import Card from "./Card";
import QuestionsForm from './QuestionsForm'


const initialState = {
    thread_title: '',
    thread_body: '',
    business_type: '',
    author_id: 2, 
    extra_data: ''
}

const QuestionsList = props => {
    const[question, setQuestion] = useState([]) // GET REQUEST FOR ALL STORED QUESTIONS
    const[list, setList] = useState(initialState) // USED WITH INITIAL STATE
    const[edit, setEdit] = useState(initialState) // PUT REQUEST

    

    useEffect(() => {
        console.log('in useEffect', question)
        axiosWithAuth()
            .get('/threads', question)
            .then(res => {
                console.log("Question Link Res", res.data)
                setQuestion(res.data)
            })
            .catch(err => console.log("Link Error", err.response))
    }, [])
    

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/new-thread', list)
            .then(res => {
                console.log("Questions Form Submit", res)
                setQuestion([...question, list])
                window.location.reload()
            })
            .catch(err => console.log("SUBMIT ERROR", err))
    }

    const saveEdit = e => {
        e.preventDefault();
        console.log("Edit Log", edit)
        axiosWithAuth()
            .put(`/${edit.id}/thread`, edit)
            .then(res => {
                console.log("SAVE EDIT RES", res)
                setQuestion(
                    question.map(change => {
                        if(change.id === edit.id){
                            return res.data
                        } else return change
                    }))
                window.location.reload()
            })
    }
    

    const removeQuestion = input => {
        console.log("this is id", question)

        // const trim = question.questions;
        axiosWithAuth()
            .delete(`/${input.id}/thread`)
            .then(res => {
                console.log('DELETE IS WORKING', res)
                setQuestion(question.filter(click => 
                    click.id !== input.id || question.id ))
            })
            .catch(err => console.log('DELETE ERROR', err.response))
    }





    // const changeHandler = e =>{
    //     // console.log('change handler props', props)
    //     props.setQuery(e.target.value)
    // }
    const handleChange = e => {
        setEdit({...edit, [e.target.name]: e.target.value});
    }


    return(
        <div className="questionListCont">
            <QuestionsForm question={question} setQuestion={setQuestion} list={list} setList={setList} handleSubmit={handleSubmit}/>
            <section className="editForm">
                <form onSubmit={saveEdit}>
                    <label htmlFor="title"></label>
                        <input
                        type="text"
                        name="thread_title"
                        placeholder="Title"
                        onChange={handleChange}
                        value={edit.thread_title}
                        />
                    <label htmlFor="business-type"></label>
                        <input
                        type="text"
                        name="business_type"
                        id="business-type"
                        placeholder="Business Type"
                        onChange={handleChange}
                        value={edit.business_type}
                        />                   
                    <label htmlFor="question"></label>
                        <input
                        type ="textarea"
                        name="thread_body"
                        id="question"
                        placeholder="Question"
                        onChange={handleChange}
                        value={edit.thread_body}
                        />
                    {/* <label htmlFor="question"></label>
                        <input
                        type ="textarea"
                        name="question"
                        id="question"
                        onChange={handleChange}
                        value={thread.thread_body}
                        /> */}
                    <button>Edit Question</button>
            </form>
            </section>
            {/* <span>
            <SearchForm
                changeHandler={changeHandler}
                query={props.query} 
                setQuery={props.setQuery}
            /> 
            </span> */}
            <section className="questionList">
                {question.map(thing => {
                    // console.log('This is thing', thing)
                    return(
                        <div key={thing.thing}>
                            {/* <QuestionLink question={thing}/> */}
                            <Card question={thing} />
                            <button onClick={() => removeQuestion(thing)}> 
                                Remove Question
                            </button>
                            <button onClick={() => setEdit(thing)}> 
                                Edit
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

//     const {business_type, id,thread_title, thread_body} = question;

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
//                     // authorId={author_id}
//                     id={id}
//                     thread_title={thread_title}
//                     thread_body={thread_body}
//                     business_type={business_type}
//                 />
//                 </div>
//             </NavLink>
//             </div>
            
//         )
// }

export default QuestionsList;