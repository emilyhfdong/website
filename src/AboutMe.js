import React, { Component } from 'react';
import Summary from './Summary.js'
import Skills from './Skills.js'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class AboutMe extends Component {
  scrollToAboutMe = () => {
    const options = {
      smooth: true,
    }
    scroller.scrollTo('aboutMePage', options)
  }
  render() {
    return (
      <div className="aboutMe">
        <Summary/>
        <Skills/>
      </div>
    );
  }
}

export default AboutMe;