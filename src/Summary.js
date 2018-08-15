import React, { Component } from 'react';
import pointsData from './data/summaryPoints.js'

class Summary extends Component {
  render() {
    const summaryPoints = pointsData.map(point => {
      return (
        <div className="summaryPoint">
          <p className="pointName">{point.name}</p>
          <p className="pointDescription">{point.description}</p>
        </div>
        )
    })

    return (
      <div className="summary">
        <h3 className="summaryTitle">who am i ?</h3>
        <div className="summaryPoints">
          {summaryPoints}
        </div>
      </div>
    );
  }
}

export default Summary;