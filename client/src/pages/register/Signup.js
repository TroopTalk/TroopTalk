import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      email: "",
      pass: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fName, lName, email, pass } = this.state;
    console.log(fName, lName, email, pass);
  }

  render() {
    const { onclick } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={(e) => this.setState({ fName: e.target.value })} placeholder="First Name" />
        <input type="text" onChange={(e) => this.setState({ lName: e.target.value })} placeholder="Last Name" />
        <input type="text" onChange={(e) => this.setState({ email: e.target.value })} placeholder="User Name" />
        <input type="text" onChange={(e) => this.setState({ lName: e.target.value })} placeholder="Service Branch" />
        <input type="email" onChange={(e) => this.setState({ email: e.target.value })} placeholder="Email" />
        <input type="password" onChange={(e) => this.setState({ pass: e.target.value })} placeholder="Password" />
        <button type="submit" onClick={onclick}>
          Submit
        </button>
      </form>
    );
  }
}

export default Signup;
