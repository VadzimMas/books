import { useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {

    const [books, setBooks] = useState([])

    const createBook = (title) => {
        setBooks([...books, { id: Math.random(), title }])
    }

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        })
        setBooks(updatedBooks)
    }

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
            }
            return book
        })
        setBooks(updatedBooks)
    }

    return (
        <div className="app">
            <h1>Reading list</h1>

            <BookCreate
                onCreate={createBook}
            />
            <BookList
                books={books}
                onDelete={deleteBookById}
                onEdit={editBookById}
            />
        </div>
    )
}

export default App

