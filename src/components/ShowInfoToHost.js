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
    axios.get(`http://localhost:5000/rooms?clients_id=${id}`).then((res) => {
      console.log("res in get", res.data);
      //this.props.roomsdata(res.data)
      console.log(this.props.roomsCallback(res.data));

      this.setState({ data: res.data });
    });
  }

  formatDate(dateString) {
    let date = new Date(dateString).toDateString();
    return date;
  }
  

  render() {
    if (this.props.user.loggedIn !== true) {
      return <h1> YOU CANT SEE THIS!</h1>;
    }
    return (
      <div>
        <ul>
          {this.state.data.map((data, index) => (
            // for each room
            // show edit button
            // THEN
            // you have roomId in data (data.id or something)!
            // So, you could pass it in the Link
            // Link to = 'UpdateRooms/46'
            <li key={index}>
              <p>
                {data.first_name} {data.last_name}
              </p>
              <p> {data.city}</p>
              <p> {this.formatDate(data.start_date)}</p>
              <p> {this.formatDate(data.end_date)}</p>
              <Link
                to={`UpdatedRooms/${data.id}`}
              >
                <button>{data.id}edit</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShowInfoToHost;
