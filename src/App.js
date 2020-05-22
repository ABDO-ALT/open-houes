import React from "react";
import "./App.css";
import MainBar from "./components/MainBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Host from "./components/Host";
import Guest from "./components/Guest";
import ShowDataToGuest from "./components/ShowDataToGuest";
import CreateRoomsForm from "./components/CreateRoomsForm";
import ShowInfoToHost from "./components/ShowInfoToHost";
import UpdatedRooms from "./components/UpdatedRooms";

// App is not a class, it is a function!
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      first_name: "",
      id: "",
      user_type: "",
      rooms: [],
    };
    this.loginCallback = this.loginCallback.bind(this);
    this.roomsCallback = this.roomsCallback.bind(this);
  }

  loginCallback(respons) {
    // Get user info from here and add to state
    console.log("respons of call back", respons);
    this.setState({
      loggedIn: true,
      id: respons.id,
      first_name: respons.first_name,
      user_type: respons.user_type,
    });
  }

  roomsCallback(rooms) {
    console.log("rooms called back: ", rooms);
    this.setState({
      rooms: rooms,
    });
  }

  render() {
    console.log("state of App: ", this.state);
    return (
      <Router>
        <MainBar />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/contact" render={() => <Contact />} />
          <Route
            path="/Host"
            render={() => <Host loginCallback={this.loginCallback} />}
          />
          <Route
            path="/Guest"
            render={() => <Guest loginCallback={this.loginCallback} />}
          />
          <Route
            path="/ShowDataToGuest"
            render={() => <ShowDataToGuest loginCallback={this.state} />}
          />
          <Route
            path="/CreateRoomsForm"
            render={() => <CreateRoomsForm loginCallback={this.state} />}
          />
          <Route
            path="/ShowInfoToHost"
            render={() => (
              <ShowInfoToHost
                user={this.state}
                roomsCallback={this.roomsCallback}
              />
            )}
          />
          <Route
            path="/UpdatedRooms/:Id"
            render={() => <UpdatedRooms userInfo={this.state} />}
          />
        </Switch>
      </Router>
    );
  }
}
export default App;
