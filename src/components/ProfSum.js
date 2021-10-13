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
    this.handleDeleteCallback = this.handleDeleteCallback.bind(this);
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
  }

  // submit blurb and skills array only
  handleSubmit(e) {
    e.preventDefault();

    this.props.parentCallBack(this.state);
  }

  handleDeleteCallback(childData) {
    this.setState({
      skills: this.state.skills.filter(function(skill) {
        return skill.id !== childData;
      })
    });
  }

  render() {
    const skills = this.state.skills;

    return (
      <form id="profSum" className="section">
        <span className="inputSectionHeader">Professional Summary</span>
        <div className="inputArea">
          <label htmlFor="blurb">Summary: </label>
          <textarea rows="4" name="blurb" onChange={this.handleInputChange} />
        </div>
        <div className="inputArea">
          <label htmlFor="newSkill">Skills: </label>
          <input name="newSkill" value={this.state.newSkill.text} onChange={this.handleSkillChange} />
        </div>
        <button onClick={this.handleSkillArray}>Add New Skill</button>

        <ProfSumSkillList skills={skills} deleteSkill={this.handleDeleteCallback} />

        <button onClick={this.handleSubmit}>Save Section</button>
      </form>
    );
  }
}

export default ProfSum;