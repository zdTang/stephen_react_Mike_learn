import { useState } from "react";
import { useContext } from "react";
import bookContext from "../context/books";

export default function BookEdit({ book, handleSubmit }) {
  const [titleForEdit, setTitle] = useState(book.title);
  const { editBookById } = useContext(bookContext);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmitClick = (event) => {
    event.preventDefault();
    handleSubmit();
    editBookById(book.id, titleForEdit);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmitClick}>
      <label>Title</label>
      <input className="input" value={titleForEdit} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}
