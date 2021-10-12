import React from "react";

class Edu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      degree: '',
      years: '',
      gpa: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const input = target.value;

    this.setState({
      [name]: input
    });
  }

  handleSubmit(e){
    e.preventDefault();

    console.table(this.state);
  }

  render() {
    return (
      <form id="edu" className="section">
        <div className="inputArea">
          <label htmlFor="school">School Name: </label>
          <input name="school" onChange={this.handleInputChange} />
        </div>

        <div className="inputArea">
          <label htmlFor="degree">Degree or Major: </label>
          <input name="degree" onChange={this.handleInputChange} />
        </div>

        <div className="inputArea">
          <label htmlFor="years">Years Attended: </label>
          <input name="years" onChange={this.handleInputChange} />
        </div>

        <div className="inputArea">
          <label htmlFor="gpa">GPA (optional): </label>
          <input name="gpa" onChange={this.handleInputChange} />
        </div>

        <button name="submit" onClick={this.handleSubmit}>Save Section</button>
      </form>
    );
  }
}

export default Edu;