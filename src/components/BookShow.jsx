import { useState } from 'react'
import BookEdit from './BookEdit.jsx'

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false)

    const handleSubmit = (id, newTitle) => {
        setShowEdit(!showEdit)
        onEdit(id, newTitle)
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
                    onClick={() => onDelete(book.id)}
                >
                    delete
                </button>
            </div>
        </div>)
}

export default BookShow

