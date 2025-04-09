import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  // const contacts = [
  //   { id: 1, name: "John", email: "john@gmail.com" },
  //   { id: 2, name: "David", email: "david@gmail.com" },
  // ];
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const isFirstRender = useRef(true);

  const addContactsHandler = (contact) => {
    console.log(contact);
    // setContacts([...contacts, contact]);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };
  const removeContactsHandler = (id) => {
    const newContactsList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactsList);
  };

  useEffect(() => {
    const retrivedContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrivedContacts) setContacts(retrivedContacts);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactsHandler={addContactsHandler} />
      <ContactList
        contacts={contacts}
        removeContactId={removeContactsHandler}
      />
    </div>
  );
}

export default App;
