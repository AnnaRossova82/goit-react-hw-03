import css from "./ContactList.module.css"
import { HiOutlinePhoneIncoming } from "react-icons/hi";
import { HiUserAdd } from "react-icons/hi";




const ContactList = ({ contacts, onDeleteContact }) => {
  const handleDelete = (id) => {
    onDeleteContact(id);
  };

  return (
    <div className={css.container}>
      {contacts.map((contact) => (
        <div className={css.card} key={contact.id}>
          <span>
          <p>    <HiUserAdd />    Name: {contact.name}</p>
          <p> <HiOutlinePhoneIncoming />     Number: {contact.number}</p>
          </span>
         
          <button className={css.buttonDel} onClick={() => handleDelete(contact.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;

