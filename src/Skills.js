import React, { Component } from 'react';
import skillsdata from './data/skills.js'
import Skill from './Skill.js'

class Skills extends Component {
  render() {
    const allSkills = skillsdata.map(skill => (
      <Skill
        group={skill.group}
        skillList={skill.skillList}
      />
      ))
    return (
      <div className="skills">
        <h3 className="skillsTitle">skills</h3>
        <div className="skillsContainer">
          {allSkills}
        </div>
      </div>
    );
  }
}

export default Skills;