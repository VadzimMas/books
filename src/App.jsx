import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import { useContext, useEffect } from 'react'
import BooksContext from './context/books';

function App() {
    const { fetchBooks } = useContext(BooksContext)

    useEffect(() => fetchBooks(), [])

    return (
        <div className="app">
            <h1>Reading list</h1>
            <BookCreate />
            <BookList />
        </div>
    )
}

export default App

