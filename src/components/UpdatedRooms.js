import React from "react";
import "../App";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
class UpdatedRooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: "",
      end_date: "",
      city: "",
    };
    // this.state = {
    //   room: this.getRoom(this.props.match.params.Id)
    // };

    // props.userInfo.rooms.forEach((room) => {
    //   let roomId = parseFloat(props.match.params.Id);
    //   if (room.id === roomId) {
    //     this.state = {
    //       start_date: room.start_date.slice(0, 10),
    //       end_date: room.end_date.slice(0, 10),
    //       city: room.city,
    //     };
    //   }
    // });

    console.log(props.match.params.Id);
    console.log("updated props", props);
  }

  // getRoom(roomId) {

  // }

  componentDidMount() {
    const id = parseFloat(this.props.match.params.Id);
    axios.get(`http://localhost:5000/rooms/${id}`).then((res) => {
      // call this.setState with new room info
      console.log(res);
      this.setState({
        start_date: res.data[0].start_date.slice(0, 10),
        end_date: res.data[0].end_date.slice(0, 10),
        city: res.data[0].city,
      });
      console.log("respons of componentDidMount", res);
    });
  }

  changeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandle = (e) => {
    e.preventDefault();
    const id = this.props.match.params.Id;
    axios
      .put(`http://localhost:5000/rooms/${id}`, this.state)
      .then((res) => {
        console.log("response of room", res);
        this.props.history.push("/ShowInfoToHost");
      })
      .catch((error) => {
        console.log(error);
        //console.log("Error", error.message);
        //this.setState({ errorMessage: error });
      });
  };
  render() {
    const { start_date, end_date, city } = this.state;

    if (this.props.userInfo.loggedIn !== true) {
      return <h1> YOU CANT SEE THIS!</h1>;
    }

    return (
      <div>
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
          <button type="submit">adit</button>
          <br />
          <Link to="/">
            <button type="submit">BACK TO Home</button>
          </Link>
        </form>
      </div>
    );
  }
}
export default withRouter(UpdatedRooms);
