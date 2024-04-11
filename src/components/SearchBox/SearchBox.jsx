export default function SearchBox({ searchTerm, onSearchChange }) {
    return (
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    );
  }
  
  
