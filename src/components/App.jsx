import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function App() {
  const contacts = [
    { id: 1, name: "John", email: "john@gmail.com" },
    { id: 2, name: "David", email: "david@gmail.com" },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
