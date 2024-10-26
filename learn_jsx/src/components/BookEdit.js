import { useState } from "react"



export default function BookEdit({book,editTitle,closeForm}) {
  const [titleForEdit,setTitle]=useState(book.title);

  const handleChange=(event)=>{
    setTitle(event.target.value);
  } 
  const handleSubmit=(event)=>{
    event.preventDefault();
    editTitle(book.id,titleForEdit);
    closeForm();
  }
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={titleForEdit} onChange={handleChange}/>
      <button className="button is-primary">Save</button>
     </form>
  )
}
