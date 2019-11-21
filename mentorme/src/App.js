import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Axios from "axios";



// Components
import NavBar from './components/NavBar';
import Login from './components/Login';
import MentorPage from './components/MentorPage';
import Conversations from './components/Conversations';
import Register from './components/Register';
import QuestionsList from "./components/QuestionsList";
import SignedOutLink from './components/SignedOutLink'



function App() {
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

    // useEffect(() => {
    //     Axios.get(`https://mentor-me-web.herokuapp.com/api/comments/${comments.id}`)
    //     .then(res => {
    //         setComments( res.data)
    //         console.log("comments", res.data)
    //     })
    // },[])




return (
    <div className="App">
        <NavBar />
        <div>
        <Router>
            <Route exact path ="/" component={Login}/>
            <Route exact path ="/register" component={Register}/>
              {/* <Route exact path = "/comments" render= {props => (<Conversations {...props}/>)}/> */}
            <PrivateRoute exact path="/mentor" component={MentorPage}/>
            <Route
                    exact
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
          </Router>
      </div>
    </div>
  );
}

export default App;


// const [comment, setComment] = useState({
//   thread_title: "I want to test a thread",
//   thread_body: "What is the best way to test if a thread is being created?",
//   business_type: "Programatic Testing",
//           author_id: 3
// });