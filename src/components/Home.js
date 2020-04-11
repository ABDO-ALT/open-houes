import React from "react";
import "../App";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <h1 className="host">
        <Link to="/Host">
          <button className="host">Host</button>
        </Link>
      </h1>
      <h1 className="guest">
        <Link to="/Guest">
          {" "}
          <button className="gest">Guest</button>
        </Link>
      </h1>
    </div>
  );
}
export default Home;
