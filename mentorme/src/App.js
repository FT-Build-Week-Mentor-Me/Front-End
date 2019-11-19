import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoData from './components/DemoData';
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <div className="App">
         <Router>
      <DemoData />
    </Router>
    </div>
  );
}

export default App;
