import React, { Component } from 'react';

class Skill extends Component {
  render() {
    const skillList = this.props.skillList.map(skill => (<li>{skill}</li>))
    return (
      <div className="skill">
        <p>{this.props.group}</p>
        <ul>
          {skillList}
        </ul>
      </div>
    );
  }
}

export default Skill;