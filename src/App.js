import React, { Component } from 'react'
import Title from './Title.js'
import AboutMe from './AboutMe.js'
import Experiences from './Experiences.js'
import Skills from './Skills.js'
import EducationList from './EducationList.js'
import NavBar from './NavBar.js'
import Projects from './Projects.js'

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Element name="titlePage" className="element">
          <Title/>
        </Element>

        <Element name="aboutMePage" className="element">
          <AboutMe/>
        </Element>

        <Element name="experiencesPage" className="element">
          <Experiences/>
        </Element>

        <Element name="projectsPage" className="element">
          <Projects/>
        </Element>

      </div>
    );
  }
}

export default App;
