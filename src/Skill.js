import React, { Component } from 'react';

class Skill extends Component {
  render() {
    const skillList = this.props.skillList.map(skill => (<p className="oneSkill">{skill}</p>))
    return (
      <div className="skill">
        <p className="skillGroupTitle">{this.props.group}</p>
        <div className="skillList">
          {skillList}
        </div>
      </div>
    );
  }
}

export default Skill;