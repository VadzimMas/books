
import { useState, useContext } from 'react'
import BooksContext from '../context/books'

function BookCreate() {
    const [title, setTitle] = useState('')
    const { createBook } = useContext(BooksContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createBook(title)
        setTitle('')
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form
                action=""
                name="title"
                onSubmit={handleSubmit}
            >
                <label
                    htmlFor="title">Title
                </label>
                <input
                    className='input'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    className='button'
                    type="submit">Create!
                </button>
            </form>
        </div >)
}

export default BookCreate

