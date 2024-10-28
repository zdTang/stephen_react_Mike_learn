import BookShow from "./BookShow";
import useBooksContext from "../hooks/bookContext";
const BookList = () => {
  // each Item need a key, or it will have error
  // cannot render a array directly, need a root tag such as <div>
  const { books } = useBooksContext();
  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
