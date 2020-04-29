import React from "react";
import "../App";

class Showdata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
     // console.log('abdo',this.props.loginCallback.loggedIn)
    if ( this.props.loginCallback.loggedIn!== true) {
      return <p> YOU CANT SEE THIS!</p>
    }
    return <h1>hi - secret stuff </h1>;
  }
}
export default Showdata;
