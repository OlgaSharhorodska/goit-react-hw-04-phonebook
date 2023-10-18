import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  function onFormSubmit(contact) {
    const contactExist = contacts.some(
      (item) => item.contact === contact.contact
    );

    if (contactExist) {
      alert(`${contact.contact} is already in contacts.`);
    } else {
      setContacts((contacts) => [...contacts, contact]);
    }
  }

  function onDeleteHandler(id) {
    setContacts((contact) => contact.filter((item) => item.id !== id));
    setFilteredContacts((contact) => contact.filter((item) => item.id !== id));
  }

  function onInputHandler(evt) {
    const searchTerm = evt.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = contacts.filter((item) =>
      item.contact.toLowerCase().includes(searchTerm)
    );
    setFilteredContacts(filtered);
  }

  return (
    <div className="container">
      <div className="wrapper" style={isOpen === true ? {} : { padding: "0" }}>
        <button className="close" onClick={() => setIsOpen(!isOpen)}>
          &times;
        </button>
        {isOpen && (
          <>
            <div className="phonebook-wrapper">
              <h1>Phonebook</h1>
              <ContactForm onFormSubmit={onFormSubmit} />
            </div>

            {contacts.length !== 0 && (
              <div className="contacts-wrapper">
                <h2>Contacts</h2>
                <Filter contacts={contacts} onInputHandler={onInputHandler} />
                <ContactList
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  filteredContacts={filteredContacts}
                  contacts={contacts}
                  onDeleteHandler={onDeleteHandler}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

