import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetails from "./ContactDetails";
import api from "../api/contacts";

function App() {
  // const contacts = [
  //   { id: 1, name: "John", email: "john@gmail.com" },
  //   { id: 2, name: "David", email: "david@gmail.com" },
  // ];
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const isFirstRender = useRef(true);

  //Retrieve Contacts (from API)
  const retrivedContacts = async () => {
    try {
      console.log("Fetching contacts...");
      const response = await api.get("/contacts");
      console.log("Contacts retrieved:", response.data); // Log the response to verify the data
      return response.data;
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  // const retrivedContacts = async () => {
  //   const response = await api.get("/contacts");
  //   return response.data;
  // };

  const addContactsHandler = (contact) => {
    console.log(contact);
    // setContacts([...contacts, contact]);   //commented as we are using ids with uudid
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };
  const removeContactsHandler = (id) => {
    const newContactsList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactsList);
  };

  useEffect(() => {
    // const retrivedContacts = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY)
    // );
    // if (retrivedContacts) setContacts(retrivedContacts);     //Commented code that is retriving contacts from local storage
    const getAllContacts = async () => {
      const allContacts = await retrivedContacts();
      if (allContacts) setContacts(allContacts);
    };
    // console.log("Fetching contacts from API...");
    getAllContacts();
    // console.log("Fetching contacts from API...");
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)); //commented as we don't want to keep data in localstorage
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactsHandler={addContactsHandler} />}
          />
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                removeContactId={removeContactsHandler}
              />
            }
          />
          <Route path="/contact/:id" element={<ContactDetails />} />
        </Routes>
        {/* <AddContact addContactsHandler={addContactsHandler} />
        <ContactList
          contacts={contacts}
          removeContactId={removeContactsHandler}
        /> */}
      </Router>
    </div>
  );
}

export default App;
