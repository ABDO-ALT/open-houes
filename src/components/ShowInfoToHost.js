import React from "react";
import "../App";
import axios from "axios";
import { Link } from "react-router-dom";
class ShowInfoToHost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    console.log("host info", props);
  }
  componentDidMount() {
    const id = this.props.user.id;
    axios
      .get(`http://localhost:5000/rooms?clients_id=${id}`)
      .then((res) => {
        console.log("res in get", res.data.length);
        this.setState({ data: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  formatDate(dateString) {
    let date = new Date(dateString).toDateString();
    return date;
  }

  render() {
    console.log("this.state");
    if (this.props.user.loggedIn !== true) {
      return <h1> YOU CANT SEE THIS!</h1>;
    } else if (this.state.data.length === 0) {
      return (
        <div>
          <h1>you don't have room</h1>
          <Link to="CreateRoomsForm">
            <button>Create</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <ul>
            {this.state.data.map((data, index) => (
              <li key={index}>
                <p>
                  {data.first_name} {data.last_name}
                </p>
                <p> {data.city}</p>
                <p> {this.formatDate(data.start_date)}</p>
                <p> {this.formatDate(data.end_date)}</p>
                <Link to={`UpdatedRooms/${data.id}`}>
                  <button>{data.id}edit</button>
                </Link>
                <Link to={`DeleteHostRooms/${data.id}`}>
                  <button>{data.id}Delet</button>
                </Link>
                <Link to="CreateRoomsForm">
                  <button>Create</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default ShowInfoToHost;
