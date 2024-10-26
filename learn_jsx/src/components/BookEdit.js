import { useState } from "react"



export default function BookEdit({book}) {
  const [titleForEdit,setTitle]=useState(book.title);
  
  const handleChange=(event)=>{
    setTitle(event.target.value);
  } 
  const handleSubmit=(event)=>{
    event.preventDefault();
  }
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={titleForEdit} onChange={handleChange}/>
      <button className="button is-primary">Save</button>
     </form>
  )
}
