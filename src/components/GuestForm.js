import React from "react";
import "../App";

class GuestForm extends React.Component {
  render() {
    return (
      <form>
        <label>First Name</label>
        <br />
        <input type='text'></input>
        <br />
        <label>LastName</label>
        <br />
        <input type='text'></input>
        <br />
        <label>Phone Number</label>
        <br />
        <input type='phone'></input>
        <br />
        <label>Email</label>
        <br />
        <input type='email'></input>
        <br />
        <label> Your Age</label>
        <br />
        <input type='date'></input>
        <br />
        <input type="checkbox"/>female
        <input type="checkbox"/>male <br/>
        <button type='submit'> Logo in</button>
      </form>
    );
  }
}
export default GuestForm;