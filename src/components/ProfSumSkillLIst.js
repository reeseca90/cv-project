import React from "react";

const ProfSumSkillList = (props) => {
  const { skills } = props;

  return (
    <ul>
      {skills.map((skill) => {
        return <li key={skill.id}>{skill.text}</li>
      })}
    </ul>
  );
};

export default ProfSumSkillList;