import React from 'react';
import './App.css';
import General from "./components/General";
import ProfSum from './components/ProfSum';
import WorkHist from './components/WorkHist';
import Edu from './components/Edu';
import FinalView from './components/FinalView';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFinal: false,
      // this gets populated by general, profsum, workhist, edu
    }
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
    console.log(this.state);
  }

  postPDF = (e) => {
    e.preventDefault();

    const postBody = {
      name: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
      email: this.state.email,
      summary: this.state.blurb,
      allSkills: JSON.stringify(this.state.skills),
      workHist: JSON.stringify(this.state.works),
      edu: JSON.stringify(this.state.edu)
    }

    console.log(postBody);

    if (this.state.showFinal === true) {
      axios.post('/api/', {
        postBody
      })
      .then (() => {
        console.log('Sent');
      })
    }
    
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

        <div className='buttons'>
          <button onClick={this.showFinalView}>Show Final View</button>
          <button onClick={this.postPDF}>Generate PDF</button>
        </div>

        <FinalView data={this.state} />
      </div>
    );
  }
}

export default App;
