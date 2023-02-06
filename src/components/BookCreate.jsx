
import { useState } from 'react';

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate(title)
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
