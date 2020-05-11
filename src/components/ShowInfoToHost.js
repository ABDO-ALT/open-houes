import React from "react";
import "../App";
import axios from "axios";
class ShowInfoToHost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    console.log("host", props);
  }

  componentDidMount() {
    const id = this.props.user.id;
    axios.get(`http://localhost:5000/rooms?clients_id=${id}`).then((res) => {
      this.setState({ data: res.data });
      console.log({ data: res.data });

      //console.log(res.data[1].age.split("").slice(0, 10).join(""));
    });
  }
  formatDate(dateString){
    console.log(dateString);
    let date = new Date(dateString).toDateString()
    return date
  }

  render() {
    if (this.props.user.loggedIn !== true) {
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
            <p> {this.formatDate(data.start_date)}</p>
            <p> {this.formatDate(data.end_date)}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default ShowInfoToHost;
