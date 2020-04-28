import React from "react";
import "../App";
import GuestAndHostForm from "./GuestAndHostForm";
import LoginForm from "./LoginForm";
function Host() {
  return (
    <div>
      <h1 className="titleOfHost">Host Sing Up</h1>
      <GuestAndHostForm user_type="Host" />
      <LoginForm />
    </div>
  );
}
export default Host;
