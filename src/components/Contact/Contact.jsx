import css from "./Contact.module.css"



const Contact = ({ id, name, number, onDeleteContact }) => {
    const handleDelete = () => {
      onDeleteContact(id);
    };
  
    return (
      
        <div className={css.card}>
        <span>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
        </span>
       
        <button onClick={handleDelete}>Delete</button>
     
      </div>
      
    );
  };
  
  export default Contact;