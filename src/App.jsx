import { createNote, toggleImportanceOf } from './reducer/noteReducer'
import { useSelector, useDispatch } from 'react-redux'

function App() {
    const dispatch = useDispatch()
    const notes = useSelector((state) => state)

    const addNote = (event) => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        dispatch(createNote(content))
        console.log(content)
    }
    const toggleImportance = (id) => {
        dispatch(toggleImportanceOf(id))
    }

    return (
        <>
            <h1>React App</h1>
            <form onSubmit={addNote}>
                <input name="note" />
                <button type="submit">add</button>
            </form>
            <ul>
                {notes.map((note) => (
                    <li key={note.id} onClick={() => toggleImportance(note.id)}>
                        {note.content}
                        <strong>
                            {note.important ? 'important' : 'trivial'}
                        </strong>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
