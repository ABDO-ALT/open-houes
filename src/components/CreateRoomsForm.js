import React from "react";
import "../App";
import axios from "axios";
import { withRouter } from "react-router-dom";
class CreateRoomsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients_id: props.loginCallback.id,
      start_date: "",
      end_date: "",
      city: "",
    };
    console.log(this.props.loginCallback.id);
  }
  changeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  myfech() {
    return `http://localhost:5000/rooms`;
  }
  submitHandle = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(this.myfech(), this.state)

      .then((response) => {
        console.log("response of room", response);
        this.props.history.push("ShowInfoToHost");
      })
      .catch((error) => {
        console.log(error);
        //console.log("Error", error.message);
        //this.setState({ errorMessage: error });
      });
  };
  render() {
    const { start_date, end_date, city } = this.state;

    if (this.props.loginCallback.loggedIn !== true) {
      return <p> YOU CANT SEE THIS!</p>;
    }
    return (
      <div>
        {" "}
        <h1>hi - Welcome {this.props.loginCallback.first_name}</h1>
        <form onSubmit={this.submitHandle}>
          <label htmlFor="start_date">Start Date</label>
          <br />
          <input
            name="start_date"
            id="start_date"
            required="required"
            type="date"
            value={start_date}
            onChange={this.changeHandle}
          ></input>
          <br />
          <label htmlFor="end_date"> End Date</label>
          <br />
          <input
            type="date"
            id="end_date"
            required="required"
            name="end_date"
            value={end_date}
            onChange={this.changeHandle}
          ></input>
          <br />
          <label htmlFor="end_date"> Your city</label>
          <br />
          <input
            type="city"
            id="city"
            required="required"
            name="city"
            value={city}
            onChange={this.changeHandle}
          ></input>
          <br />
          <button type="submit">creat</button>
        </form>
      </div>
    );
  }
}
export default withRouter(CreateRoomsForm);
