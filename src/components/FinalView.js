import React from "react";

import General from "./General";
import ProfSum from './ProfSum';
import WorkHist from './WorkHist';
import Edu from './Edu';

class FinalView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // this gets populated by general, profsum, workhist, edu
    }

    this.tableData = this.tableData.bind(this);
  }

  tableData(e) {
    e.preventDefault();

    console.table(this.state);

  }

  handleCallback = (childData) => {
    this.setState(childData);
  }
  
  render () {
    return (
      <div>
        <div id="inputs">
          <General parentCallBack={this.handleCallback} />
          <ProfSum parentCallBack={this.handleCallback} />
          <WorkHist parentCallBack={this.handleCallback} />
          <Edu parentCallBack={this.handleCallback} />
        </div>

        <button onClick={this.tableData}>Table Data for Testing</button>
      </div>
    );
  }
}

export default FinalView;