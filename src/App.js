import React from 'react';
import './App.css';
import General from "./components/General";
import ProfSum from './components/ProfSum';
import WorkHist from './components/WorkHist';
import Edu from './components/Edu';
import FinalView from './components/FinalView';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFinal: false,
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

  returnFinalView = () => {
    return 
  }

  showFinalView = () => {
    this.setState({
      showFinal: true
    });
  }

  render () {
    return (
      <div id="container">
        <div id="inputs">
          <General parentCallBack={this.handleCallback} />
          <ProfSum parentCallBack={this.handleCallback} />
          <WorkHist parentCallBack={this.handleCallback} />
          <Edu parentCallBack={this.handleCallback} />
        </div>

        <button onClick={this.showFinalView}>Show Final View</button>
        <FinalView data={this.state} />
      </div>
    );
  }
}

export default App;
