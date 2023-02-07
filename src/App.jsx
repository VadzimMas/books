import { useState, useEffect } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import axios from 'axios'

function App() {

    const [books, setBooks] = useState([])

    const fetchBooks = () => {
        axios
            .get('http://localhost:3001/books')
            .then(function (response) {
                setBooks(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    const createBook = (title) => {
        axios
            .post('http://localhost:3001/books', {
                "title": title
            })
            .then((response) => {
                setBooks([...books, response.data])
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const deleteBookById = (id) => {
        axios
            .delete(`http://localhost:3001/books/${id}`)
            .then((response) => {
                const updatedBooks = books.filter((book) => {
                    return book.id !== id
                })
                setBooks(updatedBooks)
            })
            .catch((error) => {
                console.log(error)
            })



    }

    const editBookById = (id, newTitle) => {
        axios
            .put(`http://localhost:3001/books/${id}`, {
                "title": newTitle
            })
            .then((response) => {
                const updatedBooks = books.map((book) => {
                    if (book.id === id) {
                        return { ...book, ...response.data }
                    }
                    return book
                })
                setBooks(updatedBooks)
            })
            .catch((error) => {
                console.log(error)
            })
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

