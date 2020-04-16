import React from "react";
import "../App";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <div>
        <h1 className="titel">Welcome to our project</h1>
        <h3 className="informations">
          To register as a host, press the Host button
        </h3>
        <h3 className="informations">
          To register as a guest, press the guest button
        </h3>
      </div>
      <div>
        <Link to="/Host">
          <button className="host">Host</button>
        </Link>

        <Link to="/Guest">
          {" "}
          <button className="guest">Guest</button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
