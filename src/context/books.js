import { createContext, useState, useCallback } from 'react'
import axios from 'axios'


const BooksContext = createContext()

function Provider({ children }) {
    const [books, setBooks] = useState([])

    const fetchBooks = useCallback(() => {
        axios
            .get('http://localhost:3001/books')
            .then((response) => {
                setBooks(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
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

    const valueToShare = {
        books,
        fetchBooks,
        setBooks,
        createBook,
        deleteBookById,
        editBookById,
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider }
export default BooksContext