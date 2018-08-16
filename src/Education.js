import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div className="education">
        <p className="program">{this.props.program}</p>
        <p className="school">{this.props.school} ({this.props.year})</p>
        <p className="notes">{this.props.notes}</p>
      </div>
    );
  }
}

export default Education;