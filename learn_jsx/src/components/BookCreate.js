import { useState } from "react";
import { useContext } from "react";
import bookContext from "../context/books";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(bookContext);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); //  The default action of onSubmit will reload the page, we don't want that
    createBook(title);
    setTitle(""); //clear the input box
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
