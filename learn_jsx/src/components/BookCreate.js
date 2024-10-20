import { useState } from "react"
function BookCreate({onCreate}) {
  const [title,setTitle]=useState('');
  const handleChange = (event)=>{
    setTitle(event.target.value)
  }
  const handleSubmit=(event)=>{
    event.preventDefault();  //  The default action of onSubmit will reload the page, we don't want that
    onCreate(title);
    setTitle(''); //clear the input box
  }
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange}/>
        <button>Create</button>
        </form>
    </div>
  )
}

export default BookCreate