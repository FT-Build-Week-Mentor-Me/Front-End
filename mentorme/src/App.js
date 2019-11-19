import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';

// Components
import Login from './components/Login';
<<<<<<< HEAD
import MentorPage from './components/MentorPage';
import Conversations from './components/Conversations';
=======
import QuestionsForm from './components/QuestionsForm';
import Register from './components/Register';
>>>>>>> 7ce1b0e953f6df814b7d8c1df5daacf484179053

function App() {
  return (
    <div className="App">
        
        
        <div>
          <Router>
              <Route exact path ="/" component={Login}/>
<<<<<<< HEAD
              <Route exact path ="/register" />
              <Route exact path = "/comments" component={Conversations}/>
              <PrivateRoute path="/mentor" component={MentorPage}/>
=======
              <Route exact path ="/register" component={Register} />
              <PrivateRoute path="/mentor" component={QuestionsForm}/>
>>>>>>> 7ce1b0e953f6df814b7d8c1df5daacf484179053
          </Router>
      </div>
    </div>
  );
}

export default App;
