import React from "react";

const WorkHistList = (props) => {

  function deleteDutyCallback(e) {
    e.preventDefault();
    const id = e.target.id;
    props.deleteDuty(id);
  }

  return (
    <ul>
      {props.duties.map((duty) => {
        return (
          <div className="oneLine">
            <li key={duty.id}>{duty.duty}</li>
            <button id={duty.id} onClick={deleteDutyCallback}>Delete Duty</button>
          </div>
        )
      })}
    </ul>
  );
}

export default WorkHistList;