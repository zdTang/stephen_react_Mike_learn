import BookShow from './BookShow'


const  BookList = ({books,deleteBookById,editTitle}) => {
  // each Item need a key, or it will have error
  // cannot render a array directly, need a root tag such as <div>
  const renderedBooks = books.map((book)=><BookShow key={book.id} book={book} deleteBookById={deleteBookById} editTitle={editTitle}/>)

  return (
    <div className='book-list'>
    {renderedBooks}
    </div>
    
  )
}

export default BookList;