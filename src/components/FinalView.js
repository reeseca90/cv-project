import React from "react";

const FinalView = (props) => {

  const returnSkillList = () => {
    return (
      <div id="skillsOutput">
        <span className="place">Notable Skills :</span>
        <ul>
          {props.data.skills.map((skill) => {
            return (
              <li key={skill.id}>{skill.text}</li>
            )
          })}
        </ul>
      </div>
    );
  };

  const returnWorksList = () => {
    return (
      <div>
        {props.data.works.map((work) => {
          return (
            <div id={work.id} className="eduList">
              <span className="place">Company: {work.company}</span>
              <span>Title: {work.title}</span>
              <span>Duties: {work.duty}</span>
            </div>
          )
        })}
      </div>
    )
  }

  const returnEduList = () => {
    return (
      <div>
        {props.data.edu.map((edu) => {
          return (
            <div id={edu.id} className="eduList">
              <span className="place">{edu.school}</span>
              <span>{edu.years}</span>
              <span>Major: {edu.degree}</span>
              <span>GPA: {edu.gpa}</span>
            </div>
          )
        })}
      </div>
    )
  }

  const returnView = () => {
    return (
      <div id="finalView">
        <div id="generalOutput" className="outputSection">
          <span className="sectionHeader">{props.data.name}</span>
          <span>{props.data.address}</span>
          <span>{props.data.phone}</span>
          <span>{props.data.email}</span>
        </div>

        <div id="profSumOutput" className="outputSection">
          <span className="sectionHeader">About Me:</span>
          <span className="App">{props.data.blurb}</span>
          {props.data.skills !== undefined ? returnSkillList() : null }
        </div>

        <div id="workHistOutput" className="outputSection">
          <span className="sectionHeader">Employment History</span>
          {props.data.works !== undefined ? returnWorksList() : null }
        </div>

        <div id="eduOutput" className="outputSection">
          <span className="sectionHeader">Education</span>
          {props.data.edu !== undefined ? returnEduList() : null }
        </div>

      </div>
    )
  }
  
  // don't display the final view until user clicks the button to do it
  // state for this is in App.js
  return (
    <div>
    {props.data.showFinal === true ? returnView() : null }
    </div>
  );
}

export default FinalView;