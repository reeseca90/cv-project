import React from "react";
import uniqid from 'uniqid';
import WorkHistList from './WorkHistList';

class WorkHist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      title: '',
      newDuty: {
        duty: '',
        id: uniqid()
      },
      duties: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDutyArray = this.handleDutyArray.bind(this);
    this.handleDutyChange = this.handleDutyChange.bind(this);
  }

  // for blurb only
  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const input = target.value;

    this.setState({
      [name]: input
    });
  }

  // for typing in a new duty
  handleDutyChange(e) {
    const holdID = this.state.newDuty.id;

    this.setState({
      newDuty: {
        duty: e.target.value,
        id: holdID
      }
    });
  }

  // for add duty button
  handleDutyArray(e) {
    e.preventDefault();

    this.setState({
      duties: this.state.duties.concat(this.state.newDuty),
      newDuty: { 
        duty: '',
        id: uniqid()
      }
    });

    console.table(this.state.duties);
  }

  // submit company, title and duties array only
  handleSubmit(e) {
    e.preventDefault();

    console.table(this.state);
    console.table(this.state.duties);
  }

  render() {
    const duties = this.state.duties;

    return (
      <form id="workHist" className="section">
        <div className="inputArea">
          <label htmlFor="company">Company/Organization: </label>
          <input name="company" onChange={this.handleInputChange} value={this.state.company} />
        </div>
        <div className="inputArea">
          <label htmlFor="title">Job Title: </label>
          <input name="title" onChange={this.handleInputChange} value={this.state.title} />
        </div>
        <div className="inputArea">
          <label htmlFor="newDuty">Duties/Responsibilities:</label>
          <textarea name="newDuty" value={this.state.newDuty.duty} onChange={this.handleDutyChange}/>
        </div>
        
        <button onClick={this.handleDutyArray}>Add Duty/Responsibility</button>

        <WorkHistList duties={duties} />

        <button onClick={this.handleSubmit}>Save Section</button>
      </form>
    );
  }
}

export default WorkHist;