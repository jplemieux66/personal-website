// React
import React, { Component } from 'react';
// React-Router
import {Route, BrowserRouter as Router} from 'react-router-dom';
// Components
import MainContainer from './Components/MainContainer/MainContainer';
import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
        <Route path="/" component={MainContainer} />
      </Router>
    );
  }
}

export default App;
