import { useState } from "react";
import BookCreate from "./components/BookCreate";
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

  function generateUniqueString(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return `${Date.now()}-${result}`;
}

// Example usage
const uniqueString = generateUniqueString(10);

  
  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
