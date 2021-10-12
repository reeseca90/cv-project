import React from "react";

const WorkHistList = (props) => {
  const { duties } = props;

  return (
    <ul>
      {duties.map((duty) => {
        return <li key={duty.id}>{duty.duty}</li>
      })}
    </ul>
  )
}

export default WorkHistList;