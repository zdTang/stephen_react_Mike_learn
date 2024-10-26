import { useState } from "react";
import BookEdit from "./BookEdit";


export default function BookShow({book,deleteBookById,editTitle}) {
  
  const [showEdit,setShowEdit] = useState(false);
  const handleDeleteClick = ()=>{
    deleteBookById(book.id);
  }
  const handleEditClick=()=>{
    setShowEdit(!showEdit);
  }

  const closeForm = ()=>{
    setShowEdit(false);
  }

  
  return (
    <div className="book-show">
      
      {showEdit?<BookEdit book={book} editTitle={editTitle} closeForm={closeForm}/>:book.title}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}
