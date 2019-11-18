import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';

// Components
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <Login/>
        
        <div>
          <Router>
              <Route exact path ="/login" />
              <Route exact path ="/register" />
              <PrivateRoute path="/mentor"/>
          </Router>
      </div>
    </div>
  );
}

export default App;
