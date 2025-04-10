import React from "react";
import user from "../assets/user.png";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;

  return (
    <div className="item" key={id}>
      <img className="ui avatar image" src={user} alt="user" />
      <div
        className="content"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Link to={`/contact/${id}`}>
          <div>
            <div className="header">{name}</div>
            <div>{email}</div>
          </div>
        </Link>
        <i
          className="large trash alternate outline icon"
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => clickHandler(id)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
