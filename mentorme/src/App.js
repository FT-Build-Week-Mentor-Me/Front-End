import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';

// Components
import Login from './components/Login';
import MentorPage from './components/MentorPage';

function App() {
  return (
    <div className="App">
        
        
        <div>
          <Router>
              <Route exact path ="/" component={Login}/>
              <Route exact path ="/register" />
              <PrivateRoute path="/mentor" component={MentorPage}/>
          </Router>
      </div>
    </div>
  );
}

export default App;
