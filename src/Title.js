import React, { Component } from 'react';
import contactData from './data/contactLinks.js'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



class Title extends Component {
  scrollToAboutMe = () => {
    const options = {
      smooth: true,
    }
    scroller.scrollTo('aboutMePage', options)
  }
  render() {
    const contacts = contactData.map(contact => <p className="contact"><i className={contact.icon}></i>{contact.contact}</p>)
    return (
      <div className="title">
        <h1 className="name">Emily Dong</h1>
        <div className="contactContainer">
          {contacts}
        </div>
        <div onClick={this.scrollToAboutMe} className="downArrow">
          <i className="fa fa-long-arrow-down animated infinite bounce "></i>
        </div>
      </div>
    );
  }
}

export default Title;