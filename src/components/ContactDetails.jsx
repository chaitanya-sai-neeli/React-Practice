import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import user from "../assets/user.jpg";

const ContactDetails = () => {
  const location = useLocation();
  const { name, email } = location.state;
  console.log("location", location);

  return (
    <div className="main" style={{ position: "relative", top: "80px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          {/* <div className="header">Dipesh</div>
          <div className="description">dipesh.m@gmail.com</div> */}
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div
        className="center-div"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Link to={"/"}>
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
