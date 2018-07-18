import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav  from './Nav.js';
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
        <Nav/>
       </Router>
      </div>
    );
  }
}

export default App;
