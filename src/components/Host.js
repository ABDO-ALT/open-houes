import React from "react";
import "../App";
import GuestAndHostForm from "./GuestAndHostForm";

function Host() {
  return (
    <div>
      <h1 className="titleOfHost">Host Sing Up</h1>
      <GuestAndHostForm user_type = "Host" />
    </div>
  );
}
export default Host;
