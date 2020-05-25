import React from "react";
import "../App";
import axios from "axios";

class ShowDataToGuest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.formatDate = this.formatDate.bind(this);
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/rooms`).then((res) => {
      this.setState({ data: res.data });
    });
  }

  formatDate(dateString) {
    let date = new Date(dateString).toDateString();
    return date;
  }

  render() {
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
              <p>
                <a href={`tel:${data.phone_number}`}>
                  <button>{data.phone_number}</button>
                </a>
              </p>
              <p>
                <a href={`mailto:${data.email}`}>
                  <button>{data.email}</button>
                </a>
              </p>
              <p> {this.formatDate(data.age)}</p>
              <p> {data.gender}</p>
              <p> {this.formatDate(data.start_date)}</p>
              <p> {this.formatDate(data.end_date)}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ShowDataToGuest;
