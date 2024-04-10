

const ContactList = ({ contacts, onDeleteContact }) => {
  const handleDelete = (id) => {
    onDeleteContact(id);
  };

  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Number: {contact.number}</p>
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;

