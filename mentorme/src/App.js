import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';

// Components
import Login from './components/Login';
import MentorPage from './components/MentorPage';
import Conversations from './components/Conversations';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
        
        
        <div>
          <Router>
              <Route exact path ="/" component={Login}/>
              <Route exact path ="/register" component={Register}/>
              <Route exact path = "/comments" render= {props => (<Conversations {...props}/>)}/>
              <PrivateRoute path="/mentor" component={MentorPage}/>
          </Router>
      </div>
    </div>
  );
}

// const [comment, setComment] = useState({
//   thread_title: "I want to test a thread",
//   thread_body: "What is the best way to test if a thread is being created?",
//   business_type: "Programatic Testing",
//           author_id: 3
// });

export default App;
