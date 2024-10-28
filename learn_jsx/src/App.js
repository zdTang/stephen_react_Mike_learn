import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="app">
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
