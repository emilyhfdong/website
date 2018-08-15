import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div className="education">
        <p>{this.props.school}</p>
        <p>{this.props.program}</p>
        <p>{this.props.year}</p>
        <p>{this.props.notes}</p>
      </div>
    );
  }
}

export default Education;