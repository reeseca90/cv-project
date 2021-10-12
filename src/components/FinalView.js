import React from "react";

import General from './components/General';
import ProfSum from './components/ProfSum';
import WorkHist from './components/WorkHist';
import Edu from './components/Edu';

class FinalView extends React.Component {
  constructor(props) {
    super(props);

    this.General = React.createRef();
  }

  render () {
    return (
      <div id="finalView">
        <General ref={this.General} />

      </div>
    );
  }
}