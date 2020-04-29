import React from "react";
import "../App";
import GuestAndHostForm from "./GuestAndHostForm";
import LoginForm from "./LoginForm";

function Host(props) {
  //console.log('Host props: ', props)
  return (
    <div>
      <h1 className="titleOfHost">Host Sing Up</h1>
      <GuestAndHostForm user_type="Host" />
      <LoginForm loginCallback={props.loginCallback} />
    </div>
  );
}
export default Host;
