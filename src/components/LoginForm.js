import React from "react";
import "../App";
import { withRouter } from "react-router-dom";

import axios from "axios";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
    };
    // console.log("Login form", this.props);
  }

  changeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  myfech() {
    return `http://localhost:5000/login`;
  }
  submitHandle = (e) => {
    e.preventDefault();
    //console.log(this.state);
    axios
      .post(this.myfech(), this.state)

      .then((response) => {
        //console.log("myresponse", response.data.user_type);
        this.props.loginCallback(response.data);
        //this.props.loginCallback();
        if(response.data.user_type === 'Guest'){
          console.log('yes')
          this.props.history.push("ShowDataToGuest");
        }else{
          this.props.history.push("ShowDataToHost");
        }
        
      })
      .catch((error) => {
        console.log(error);
        //this.setState({ errorMessage: error });
        // if (error.response.status === 404) {
        //   this.setState({ errorMessage: error.response.data });
        // } else if (error.response.status === 401) {
        //   this.setState({ errorMessage: error.response.data });
        //   // console.log("request", error.request);
        // } else {
        //   //console.log("Error", error.message);
        //   this.setState({ errorMessage: error });
        // }
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.submitHandle}>
        {this.state.errorMessage && (
          <h3 className="error"> {this.state.errorMessage} </h3>
        )}
        <label htmlFor="EmailLogin">Email</label>
        <br />
        <input
          name="email"
          id="EmailLogin"
          required="required"
          type="email"
          value={email}
          onChange={this.changeHandle}
        ></input>
        <br />
        <label htmlFor="yourLoginPassword"> your password</label>
        <br />
        <input
          type="password"
          id="yourLoginPassword"
          required="required"
          name="password"
          value={password}
          onChange={this.changeHandle}
        ></input>
        <br />
        <button type="submit">Logo in</button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
