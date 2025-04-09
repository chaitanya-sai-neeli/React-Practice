import ContactCard from "./ContactCard";

const ContactList = ({ contacts }) => {
  // console.log(contacts);

  const renderContactsList = contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.name} />;
  });

  return <div className="ui celled list">{renderContactsList}</div>;
};

export default ContactList;
