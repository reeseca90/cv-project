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

  const returnDutyList = () => {
    return (
      <div id="dutyOutput">
        <ul>
          {props.data.duties.map((duty) => {
            return (
              <li key={duty.id}>{duty.duty}</li>
            )
          })}
        </ul>
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
          <span className="App">{props.data.blurb}</span>
          {props.data.skills !== undefined ? returnSkillList() : null }
        </div>

        <div id="workHistOutput" className="outputSection">
          <span className="sectionHeader">Employment History</span>
          <span className="place">{props.data.company}</span>
          <span>{props.data.title}: </span>
          {props.data.duties !== undefined ? returnDutyList() : null }
        </div>

        <div id="eduOutput" className="outputSection">
          <span className="sectionHeader">Education</span>
          <span className="place">{props.data.school}</span>
          <span>{props.data.years}</span>
          <span>Major: {props.data.degree}</span>
          <span>GPA: {props.data.gpa}</span>
        </div>

      </div>
    )
  }
  
  return (
    <div>
    {props.data.showFinal === true ? returnView() : null }
    </div>
  );
}

export default FinalView;