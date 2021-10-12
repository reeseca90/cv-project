import React from 'react';
import uniqid from 'uniqid';
import ProfSumSkillList from './ProfSumSkillLIst';

class ProfSum extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      blurb: '',
      newSkill: {
        text: '',
        id: uniqid()
      },
      skills: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSkillArray = this.handleSkillArray.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
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

  // for typing in a new skill
  handleSkillChange(e) {
    const holdID = this.state.newSkill.id;

    this.setState({
      newSkill: {
        text: e.target.value,
        id: holdID
      }
    });
  }

  // for add skill button
  handleSkillArray(e) {
    e.preventDefault();

    this.setState({
      skills: this.state.skills.concat(this.state.newSkill),
      newSkill: { 
        text: '',
        id: uniqid()
      }
    });

    console.table(this.state.skills);
  }

  // submit blurb and skills array only
  handleSubmit(e) {
    e.preventDefault();
    console.table(this.state);
    console.table(this.state.skills);
  }

  render() {
    const skills = this.state.skills;

    return (
      <form id="profSum" className="section">
        <div className="inputArea">
          <label htmlFor="blurb">Summary: </label>
          <textarea name="blurb" onChange={this.handleInputChange} />
        </div>
        <div className="inputArea">
          <label htmlFor="newSkill">Skills: </label>
          <input name="newSkill" value={this.state.newSkill.text} onChange={this.handleSkillChange} />
        </div>
        <button onClick={this.handleSkillArray}>Add New Skill</button>

        <ProfSumSkillList skills={skills} />

        <button onClick={this.handleSubmit}>Save Section</button>
      </form>
    );
  }
}

export default ProfSum;