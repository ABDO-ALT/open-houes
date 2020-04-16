import React from "react";
import "../App";
import axios from "axios";
class GuestAndHostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      city: "",
      phone_number: "",
      age: "",
      user_type: "",
      gender: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ gender: e.target.value });
  }

  changeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  myfech() {
    return `http://localhost:5000/clients`;
  }
  submitHandle = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(this.myfech(), this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      city,
      phone_number,
      age,
      user_type,
      gender,
    } = this.state;
    return (
      <form onSubmit={this.submitHandle}>
        <label>First Name</label>
        <br />
        <input
          type="text"
          name="first_name"
          value={first_name}
          onChange={this.changeHandle}
        ></input>
        <br />
        <label>LastName</label>
        <br />
        <input
          type="text"
          name="last_name"
          value={last_name}
          onChange={this.changeHandle}
        ></input>
        <br />
        <label>Phone Number</label>
        <br />
        <input
          type="phone"
          name="phone_number"
          value={phone_number}
          onChange={this.changeHandle}
        ></input>
        <br />
        <label>Email</label>
        <br />
        <input
          name="email"
          type="email"
          value={email}
          onChange={this.changeHandle}
        ></input>
        <br />
        <label> Your Age</label>
        <br />
        <input
          type="date"
          name="age"
          value={age}
          onChange={this.changeHandle}
        ></input>
        <br />
        <label> your country</label>
        <br />
        <input
          type="text"
          name="city"
          value={city}
          onChange={this.changeHandle}
        ></input>
        <br />
        <label> ?</label>
        <br />
        <input
          type="text"
          name="user_type"
          value={user_type}
          onChange={this.changeHandle}
        ></input>
        <br />
        <select value={gender} onChange={this.handleChange}>
          <option name="male" value="male">
            {" "}
            Male
          </option>
          <option name="female" value="famale">
            Female
          </option>
        </select>
        <button type="submit"> Logo in</button>
      </form>
    );
  }
}
export default GuestAndHostForm;
