
import { useState } from 'react';

function BookEdit({ book, onSubmit }) {

    const [title, setTitle] = useState(book.title)

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(book.id, title)
        setTitle('')
    }

    return (
        <form
            className="book-edit"
            onSubmit={handleSubmit}
        >
            <label htmlFor="">Change Title</label>
            <input
                className="input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                className="button is-primary"
                type="submit"
            >
                Save
            </button>
        </form>
    )
}

export default BookEdit

