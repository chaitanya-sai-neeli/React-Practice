import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { useState } from "react";

function App() {
  // const contacts = [
  //   { id: 1, name: "John", email: "john@gmail.com" },
  //   { id: 2, name: "David", email: "david@gmail.com" },
  // ];
  const [contacts, setContacts] = useState([]);
  const addContactsHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactsHandler={addContactsHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
