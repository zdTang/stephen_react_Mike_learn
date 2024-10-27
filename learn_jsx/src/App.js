import { useState,useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList  from "./components/BookList";
import axios from 'axios';
function App() {

  const [books,setBooks] = useState([]);

  const fetchBooks = async ()=>{
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }

  useEffect(()=>{fetchBooks();},[]);

  // When to call fetchBooks ????
  // Don't do this:
  // fetchBooks();   // infinit loop
  const createBook = async (title)=>{
    //Bad Code Example!
    // books.push({id:123,title:title});
    // setBooks(books);
    // const uniqueString = generateUniqueString(10);
    // const updatedBooks = [...books,{id:uniqueString,title}];
    // setBooks(updatedBooks);
    // console.log(uniqueString);
    const response = await axios.post('http://localhost:3001/books',{
      title
    })
    //console.log(response);
    const updatedBooks = [
      ...books,
      response.data
    ];
    setBooks(updatedBooks);
  }

  
  const editBookById = async (id,newTitle)=>{

    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      "title":newTitle
    });
    
    // Update local books with update it locally
    // other option will load ghe new books from database, which is better?
    const updatedBooks = books.map(book=>{
      if(book.id===id){
        return {...book,...response.data}
      }
      return book;
    });

    setBooks(updatedBooks);
};



  const deleteBookById = async (id) =>{
    
    await axios.delete(`http://localhost:3001/books/${id}`);

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
      <BookList books={books} deleteBookById={deleteBookById} editTitle={editBookById}/>
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
