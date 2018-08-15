import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <p className="navBtn">about me</p>
        <p className="navBtn">projects</p>
        <p className="navBtn">experience</p>
        <p className="navBtn">contact me</p>
      </div>
    );
  }
}

export default NavBar;