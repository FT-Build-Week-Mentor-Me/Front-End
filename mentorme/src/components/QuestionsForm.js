import React, { useState } from "react";
import { axiosWithAuth } from '../utils';

const QuestionsForm = () => {
    const [list, setList] = useState({
        thread_title: '',
        thread_body: '',
        business_type: '',
        author_id: 2,
        extra_data: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/new-thread', list)
            .then(res => {
                console.log("Questions Form Submit", res)
                setList([...list, list])
            })
            .catch(err => console.log("SUBMIT ERROR", err.response))
    }

    const handleChanges = e => {
        setList({...list, [e.target.name]: e.target.value});
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"></label>
                    <input
                    type="text"
                    name="thread_title"
                    placeholder="Title"
                    onChange={handleChanges}
                    value={list.thread_title}
                    />
                <label htmlFor="business-type"></label>
                    <input
                    type="text"
                    name="business_type"
                    id="business-type"
                    placeholder="Business Type"
                    onChange={handleChanges}
                    value={list.business_type}
                    />                   
                <label htmlFor="question"></label>
                    <input
                    type ="textarea"
                    name="thread_body"
                    id="question"
                    placeholder="Question"
                    onChange={handleChanges}
                    value={list.thread_body}
                    />
                {/* <label htmlFor="question"></label>
                    <input
                    type ="textarea"
                    name="question"
                    id="question"
                    onChange={handleChange}
                    value={thread.thread_body}
                    /> */}
                <button>Submit Question</button>
            </form>
        </div>
    )
}

export default QuestionsForm;