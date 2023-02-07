import { useState, useContext } from 'react'
import BookEdit from './BookEdit.jsx'
import BooksContext from '../context/books.js'

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false)
    const { deleteBookById, editBookById } = useContext(BooksContext)

    const handleSubmit = (id, newTitle) => {
        setShowEdit(!showEdit)
        editBookById(id, newTitle)
    }

    let content = showEdit ?
        < BookEdit book={book} onSubmit={handleSubmit} />
        : <h3>{book.title}</h3>

    return (
        <div className='book-show'>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
            <div>{content}</div>
            <div className="actions">
                <button
                    className="edit"
                    onClick={() => setShowEdit(!showEdit)}
                >
                    Edit
                </button>
                <button
                    className="delete"
                    onClick={() => deleteBookById(book.id)}
                >
                    delete
                </button>
            </div>
        </div>)
}

export default BookShow

