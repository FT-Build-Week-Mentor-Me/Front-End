import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';

// Components
import Login from './components/Login';
import QuestionsForm from './components/QuestionsForm';

function App() {
  return (
    <div className="App">
        
        
        <div>
          <Router>
              <Login/>
              <Route exact path ="/login" component={Login}/>
              <Route exact path ="/register" />
              <PrivateRoute path="/mentor" component={QuestionsForm}/>
          </Router>
      </div>
    </div>
  );
}

export default App;
