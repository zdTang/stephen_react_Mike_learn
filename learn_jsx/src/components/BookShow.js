import { useState } from "react";
import BookEdit from "./BookEdit";
import { useContext } from "react";
import bookContext from "../context/books";

export default function BookShow({ book }) {
  const { editBookById, deleteBookById } = useContext(bookContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, title) => {
    setShowEdit(false);
    editBookById(id, title);
  };

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {showEdit ? (
        <BookEdit book={book} handleSubmit={handleSubmit} />
      ) : (
        book.title
      )}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
