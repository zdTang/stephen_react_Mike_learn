import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList  from "./components/BookList";
function App() {

  const [books,setBooks] = useState([]);
  const createBook = (title)=>{
    //Bad Code Example!
    // books.push({id:123,title:title});
    // setBooks(books);
    const uniqueString = generateUniqueString(10);
    const updatedBooks = [...books,{id:uniqueString,title}];
    setBooks(updatedBooks);
    console.log(uniqueString);
  }

  const deleteBookById = id =>{
    var afterDeletedBookById = books.filter(book=>book.id !== id);
    setBooks(afterDeletedBookById);
  }

  function generateUniqueString(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return `${Date.now()}-${result}`;
}



  
  return (
    <div className="app">
      <BookList books={books} deleteBookById={deleteBookById}/>
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
