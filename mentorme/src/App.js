import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';

// Components
import Navbar from './components/layout/Navbar';
import Login from './components/Login';
import QuestionsForm from './components/QuestionsForm';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
        <Navbar />
        
        <div>
          <Router>
              <Route exact path ="/" component={Login}/>
              <Route exact path ="/register" component={Register} />
              <PrivateRoute path="/mentor" component={QuestionsForm}/>
          </Router>
      </div>
    </div>
  );
}

export default App;
