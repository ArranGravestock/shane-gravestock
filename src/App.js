import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav  from './Nav.js';
import Gallery from './Gallery.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
	<Gallery/>
      </div>
    );
  }
}

export default App;
