import BookShow from "./BookShow";
import { useContext } from "react";
import bookContext from "../context/books";

const BookList = ({ books, deleteBookById, editTitle }) => {
  const value = useContext(bookContext);
  // each Item need a key, or it will have error
  // cannot render a array directly, need a root tag such as <div>
  const renderedBooks = books.map((book) => (
    <BookShow
      key={book.id}
      book={book}
      deleteBookById={deleteBookById}
      editTitle={editTitle}
    />
  ));

  return (
    <div className="book-list">
      {value}
      {renderedBooks}
    </div>
  );
};

export default BookList;
