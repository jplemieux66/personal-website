import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import EducationAndSkillsPage from './Components/EducationAndSkillsPage/EducationAndSkillsPage';
import PreviousWorkPage from './Components/PreviousWorkPage/PreviousWorkPage';
import ContactFooter from './Components/ContactFooter/ContactFooter';
import './App.css';

class App extends Component {
  render () {
    return (
      <div id="container">
        <Navbar />
        <HomePage />
        <AboutPage />
        <EducationAndSkillsPage />
        <PreviousWorkPage />
        <ContactFooter />
      </div>
    );
  }
}

export default App;
