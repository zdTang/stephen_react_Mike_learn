export default function BookShow({book,deleteBookById}) {
  
  const handleClick = ()=>{
    deleteBookById(book.id);
  }
  
  return (
    <div className="book-show">{book.title}
      <div className="actions">
        <button className="actions" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  )
}
