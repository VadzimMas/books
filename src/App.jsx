import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import { useEffect } from 'react'
import useBooksContext from './hooks/use-books-context';

function App() {
    const { fetchBooks } = useBooksContext()

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

