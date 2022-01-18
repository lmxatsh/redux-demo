import { useDispatch } from 'react-redux'
import { createNote } from './reducer/noteReducer'
import notes from './service/notes'

const NewNote = (props) => {
    const dispatch = useDispatch()

    const addNote = async (event) => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        dispatch(createNote(content))
        console.log(newNote)
    }

    return (
        <form onSubmit={addNote}>
            <input name="note" />
            <button type="submit">add</button>
        </form>
    )
}

export default NewNote
