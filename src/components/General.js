import React from 'react';

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'cRAIG',
      address: '',
      phone: '',
      email: ''
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
    return( 
      <form id="general" className="section">
        <div className="inputArea">
          <label htmlFor="name">Name: </label>
          <input name="name" onChange={this.handleInputChange} />
        </div>

        <div className="inputArea">
          <label htmlFor="address">Address: </label>
          <input name="address" onChange={this.handleInputChange} />
        </div>

        <div className="inputArea">
          <label htmlFor="phone">Phone: </label>
          <input name="phone" onChange={this.handleInputChange} />
        </div>

        <div className="inputArea">
          <label htmlFor="email">Email: </label>
          <input name="email" onChange={this.handleInputChange} />
        </div>

        <button name="submit" onClick={this.handleSubmit}>Save Section</button>
      </form>
    );
  }
}

export default General;