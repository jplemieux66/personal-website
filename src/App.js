import React, { Component } from 'react';
import MainContainer from './Components/MainContainer/MainContainer';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import EducationAndSkillsPage from './Components/EducationAndSkillsPage/EducationAndSkillsPage';
import PreviousWorkPage from './Components/PreviousWorkPage/PreviousWorkPage';
import './App.css';

class App extends Component {
  render () {
    return (
      <MainContainer>
        <HomePage />
        <AboutPage />
        <EducationAndSkillsPage />
        <PreviousWorkPage />
      </MainContainer>
    );
  }
}

export default App;
