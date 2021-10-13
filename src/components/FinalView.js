import React from "react";

const FinalView = (props) => {

  const returnSkillList = () => {
    return (
      <div id="skillsOutput">
        <p>Skills :</p>
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
        <p>Duties and Responsibilities: </p>
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
      <div>

        <div id="generalOutput" className="outputSection">
          <p>{props.data.name}</p>
          <p>{props.data.phone}</p>
          <p>{props.data.email}</p>
          <p>{props.data.address}</p>
        </div>

        <div id="profSumOutput" className="outputSection">
          <p>{props.data.blurb}</p>
          {props.data.skills !== undefined ? returnSkillList() : null }
        </div>

        <div id="workHistOutput" className="outputSection">
          <p>{props.data.company}</p>
          <p>{props.data.title}</p>
          {props.data.duties !== undefined ? returnDutyList() : null }
        </div>

        <div id="eduOutput" className="outputSection">
          <p>{props.data.school}</p>
          <p>{props.data.degree}</p>
          <p>{props.data.years}</p>
          <p>{props.data.gpa}</p>
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