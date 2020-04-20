import React from "react";
import "../App";
import axios from "axios";

class GuestAndHostForm extends React.Component {
  constructor(props) {
    const user_type = props.user_type;

    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      city: "",
      phone_number: "",
      age: "",
      user_type: user_type,
      gender: "male",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.userHandleChange = this.userHandleChange.bind(this);
  }

  userHandleChange(e) {
    this.setState({ user_type: e.target.value });
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
      gender,
      password,
    } = this.state;
    return (
      <form onSubmit={this.submitHandle}>
        <label>First Name</label>
        <br />
        <input
          type="text"
          required="required"
          name="first_name"
          value={first_name}
          onChange={this.changeHandle}
        ></input>
        <br />
        <label>LastName</label>
        <br />
        <input
          type="text"
          required="required"
          name="last_name"
          value={last_name}
          onChange={this.changeHandle}
        ></input>
        <br />
        <label>Phone Number</label>
        <br />
        <input
          type="phone"
          required="required"
          name="phone_number"
          value={phone_number}
          onChange={this.changeHandle}
        ></input>
        <br />
        <label>Email</label>
        <br />
        <input
          name="email"
          required="required"
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
          required="required"
          name="city"
          value={city}
          onChange={this.changeHandle}
        ></input>
        <br />
        <label> your password</label>
        <br />
        <input
          type="password"
          required="required"
          name="password"
          value={password}
          onChange={this.changeHandle}
        ></input>

        <br />
        <label>Your gender</label>
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
        <br />
        <button type="submit"> Logo in</button>
      </form>
    );
  }
}
export default GuestAndHostForm;
