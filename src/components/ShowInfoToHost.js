import React from "react";
import "../App";
import axios from "axios";
class ShowInfoToHost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    console.log("host", props.loginCallback);
  }

  componentDidMount() {
    const id = this.props.loginCallback.id;
    axios.get(`http://localhost:5000/rooms?clients_id=${id}`).then((res) => {
      this.setState({ data: res.data });
      console.log({ data: res.data });

      //console.log(res.data[1].age.split("").slice(0, 10).join(""));
    });
  }

  render() {
    if (this.props.loginCallback.loggedIn !== true) {
      return <h1> YOU CANT SEE THIS!</h1>;
    }
    return (
      <ul>
        {this.state.data.map((data, index) => (
          <li key={index}>
            <p>
              {data.first_name} {data.last_name}
            </p>
            <p> {data.city}</p>
            <p> {data.start_date.split("").slice(0, 10).join("")}</p>
            <p> {data.end_date.split("").slice(0, 10).join("")}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default ShowInfoToHost;
