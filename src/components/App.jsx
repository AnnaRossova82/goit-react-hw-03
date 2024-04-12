import { useState, useEffect} from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox'; 

import initialContacts from '../contacts.json';
import '../index.css';

function App() {

  const [searchTerm, setSearchTerm] = useState('');   

  const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  const [contacts, setContacts] = useState(()=>{
    return savedContacts ? savedContacts : initialContacts;
   });
  

  
  const addContact = (newContact) => {
    setContacts(prevContacts => {
      const updatedContacts = [...prevContacts, newContact];
    window.localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    return updatedContacts;
  });
  };

  const onDeleteContact = id => {
    setContacts(prevContacts => {
      const updatedContacts = prevContacts.filter(contact => contact.id !== id);
      window.localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  return (
    <div >
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={onDeleteContact} />
    </div>
  );
}

export default App;

