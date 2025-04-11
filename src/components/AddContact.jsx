import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const AddContact = ({ addContactsHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  const handleAddContacts = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("All fields are mandatory!");
      return;
    }
    addContactsHandler(contact);
    setContact({ name: "", email: "" });
    console.log({ addContactsHandler, location, navigate, params });
    navigate("/");
  };

  return (
    <div className="ui main" style={{ padding: "4rem 0" }}>
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={handleAddContacts}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => {
              setContact({ ...contact, name: e.target.value });
            }}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => {
              setContact({ ...contact, email: e.target.value });
            }}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
