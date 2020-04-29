import React from "react";
import "./App.css";
import MainBar from "./components/MainBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Host from "./components/Host";
import Guest from "./components/Guest";
import Showdata from "./components/Showdata";

// App is not a class, it is a function!
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    this.loginCallback = this.loginCallback.bind(this);
  }

  loginCallback() {
    console.log("login callback!");
    this.setState({ loggedIn: true });
  }
  render() {
    //    console.log("state of App: ", this.state);
    return (
      <Router>
        <MainBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/Host"
            render={() => <Host loginCallback={this.loginCallback} />}
          />
          <Route
            path="/Guest"
            render={() => <Guest loginCallback={this.loginCallback} />}
          />
          <Route
            path="/Showdata"
            render={() => <Showdata loginCallback={this.state} />}
          />
        </Switch>
      </Router>
    );
  }
}
export default App;
