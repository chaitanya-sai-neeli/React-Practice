import ContactCard from "./ContactCard";
import { Link, Links } from "react-router-dom";

const ContactList = ({ contacts, removeContactId }) => {
  // console.log(contacts);

  const clickHandler = (id) => {
    removeContactId(id);
  };
  const renderContactsList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.name}
        clickHandler={clickHandler}
      />
    );
  });

  return (
    <div className="main" style={{ position: "relative", top: "80px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Contact List</h2>
        <Link to="/add">
          <button
            className="ui button blue right"
            style={{ marginRight: "30px" }}
          >
            Add Contact
          </button>
        </Link>
      </div>
      <div className="ui celled list">{renderContactsList}</div>
    </div>
  );
};

export default ContactList;
