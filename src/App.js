import React from "react";
import "./App.css";
import MainBar from "./components/MainBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Host from "./components/Host";
import Guest from "./components/Guest";
function App() {
  return (
    <Router>
      <MainBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/Host" component={Host} />
        <Route path="/Guest" component={Guest} />
      </Switch>
    </Router>
  );
}

export default App;
