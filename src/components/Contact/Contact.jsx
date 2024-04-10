const Contact = ({ id, name, number, onDeleteContact }) => {
    const handleDelete = () => {
      onDeleteContact(id);
    };
  
    return (
      <div>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };
  
  export default Contact;