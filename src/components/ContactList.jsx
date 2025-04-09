import ContactCard from "./ContactCard";

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

  return <div className="ui celled list">{renderContactsList}</div>;
};

export default ContactList;
