import React, { Component } from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import MainContainer from './Components/MainContainer/MainContainer';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import EducationAndSkillsPage from './Components/EducationAndSkillsPage/EducationAndSkillsPage';
import PreviousWorkPage from './Components/PreviousWorkPage/PreviousWorkPage';
import './App.css';

class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MainContainer}>
          <IndexRoute component={HomePage} />
          <Route path="about" component={AboutPage}/>
          <Route path="education-and-skills" component={EducationAndSkillsPage} />
          <Route path="work" component={PreviousWorkPage} /> 
        </Route>
      </Router>
    );
  }
}

export default App;
