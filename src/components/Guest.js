import React from "react";
import "../App";
import GuestAndHostForm from "./GuestAndHostForm";
function Guest() {
  return (
    <div>
      <h1 className="titleOfGuest">Guest Sing Up</h1>
      <GuestAndHostForm />
    </div>
  );
}
export default Guest;
