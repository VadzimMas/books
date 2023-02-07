import { useContext } from 'react'
import BooksContext from '../context/books';
import BookShow from './BookShow'

function BookList({ books, onDelete, onEdit }) {

    const { count, incrementCount } = useContext(BooksContext)

    const renderBooks = books.map((book, index) => {
        return (
            < BookShow
                book={book}
                key={book.id}
                onDelete={onDelete}
                onEdit={onEdit}
            />
        )
    })

    return (
        <div className="book-list">
            {count}
            <button
                onClick={incrementCount}
            >Increment</button>
            {renderBooks}
        </div>
    )
}

export default BookList

