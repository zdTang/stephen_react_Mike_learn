import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useEffect } from "react";
import { useContext } from "react";
import bookContext from "./context/books";
function App() {
  const { fetchBooks } = useContext(bookContext);
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
