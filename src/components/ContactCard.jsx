import React from "react";
import user from "../assets/user.png";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;

  return (
    <div className="item" key={id}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
