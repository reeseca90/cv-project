import React from "react";

import General from "./General";
import ProfSum from './ProfSum';
import WorkHist from './WorkHist';
import Edu from './Edu';

class FinalView extends React.Component {
  constructor(props) {
    super(props);

    this.General = React.createRef();
    this.ProfSum = React.createRef();
    this.WorkHist = React.createRef();
    this.Edu = React.createRef();

    this.tableData = this.tableData.bind(this);
  }

  tableData(e) {
    e.preventDefault();

    console.table(this.General.current.state);
    console.table(this.ProfSum.current.state);
    console.table(this.WorkHist.current.state);
    console.table(this.Edu.current.state);

  }
  
  render () {
    return (
      <div>
        <div id="inputs">
          <General ref={this.General} />
          <ProfSum ref={this.ProfSum} />
          <WorkHist ref={this.WorkHist} />
          <Edu ref={this.Edu} />
        </div>
      </div>
    );
  }
}

export default FinalView;