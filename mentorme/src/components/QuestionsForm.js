import React from "react";
import Axios from "axios";

const QuestionsForm = props => {

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
                        type ="textarea"
                        name="question"
                        id="question"
                         onChange={handleChange}
                        // value={props.question}
                        />


                    <label htmlFor="category"></label>
                        <input
                        type="text"
                        name="category"
                        id="category"
                         onChange={handleChange}
                        // value={props.category}
                        />
                
                        
                </form>
            </div>
    )
    
}
export default QuestionsForm;