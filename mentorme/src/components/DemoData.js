import React, {useState, useEffect} from "react";
import Axios from "axios";
import QuestionsList from "./QuestionsList";
import {Route} from "react-router-dom";
import Conversations from "./Conversations";


function DemoData(){
    const[questions, setQuestions] =useState([]);
    const[comments, setComments] =useState([]);
    const[query, setQuery] = useState("");

    useEffect(() => {
        Axios.get('https://mentor-me-web.herokuapp.com/api/threads')
        .then(res => {
            const questionsQuery = res.data.filter(search => 
                search.thread_title.toLowerCase().includes(query.toLowerCase()));
                setQuestions(questionsQuery);
        })
    },[query])

    useEffect(() => {
        Axios.get('https://mentor-me-web.herokuapp.com/api/comments')
        .then(res => {
            setComments(res.data)
            console.log("comments", res.data)
        })
    },[])

    return(

        <div className="questionList">
            <section>
            
                        <div>
                            <Route
                            
                            path="/questions"
                            render={props =>
                                <QuestionsList
                                {...props}
                                questions={questions}
                                query={query}
                                setQuery={setQuery}

                               
                                />}
                            />
                            <Route
                            path="/questions/:id"
                            render={props =>
                                <Conversations
                                {...props}
                                questions={questions}
                                comments={comments}
                                query={query}
                                setQuery={setQuery}
                                />}
                            />
                        </div>                       
                    
            </section>

        </div>
    )

   
}
export default DemoData;