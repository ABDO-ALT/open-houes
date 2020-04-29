import React from "react";
import "../App";
import GuestAndHostForm from "./GuestAndHostForm";
import LoginForm from "./LoginForm";

function Guest(props) {
  //console.log('Guest props: ',props)
  return (
    <div>
      <h1 className="titleOfGuest">Guest Sing Up</h1>
      <GuestAndHostForm user_type="Guest" loginCallback={props.loginCallback}/>
      <LoginForm loginCallback={props.loginCallback}/>
    </div>
  );
}
export default Guest;
