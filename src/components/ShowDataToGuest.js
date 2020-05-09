import React from "react";
import "../App";
import axios from "axios";

class ShowDataToGuest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/rooms`).then((res) => {
      this.setState({ data: res.data });
      console.log(res.data[1].age.split("").slice(0, 10).join(""));
    });
  }
  render() {
    //const { data}  = this.state;
    // console.log(this.props.loginCallback)
    if (this.props.loginCallback.loggedIn !== true) {
      return <p> YOU CANT SEE THIS!</p>;
    }
    return (
      <div>
        <h1>Welcome {this.props.loginCallback.first_name}</h1>
        <ul>
          {this.state.data.map((data, index) => (
            <li key={index}>
              <p>
                {data.first_name} {data.last_name}
              </p>
              <p> {data.city}</p>
              <p> {data.phone_number}</p>
              <p> {data.email}</p>
              <p> {data.age.split("").slice(0, 10).join("")}</p>
              <p> {data.gender}</p>
              <p> {data.start_date.split("").slice(0, 10).join("")}</p>
              <p> {data.end_date.split("").slice(0, 10).join("")}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ShowDataToGuest;
