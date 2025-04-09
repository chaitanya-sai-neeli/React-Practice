import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { useEffect, useRef, useState } from "react";

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
    setContacts([...contacts, contact]);
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
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
