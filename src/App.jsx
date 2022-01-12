import { useEffect } from 'react'
import { initializeNotes } from './reducer/noteReducer'
import { useDispatch } from 'react-redux'
import Notes from './Notes'
import NewNote from './NewNote'
import VisibilityFilter from './VisibilityFilter'
import noteService from './service/notes'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        noteService.getAll().then((notes) => dispatch(initializeNotes(notes)))
    }, [])

    return (
        <>
            <h1>Redux App</h1>
            <NewNote />
            <VisibilityFilter />
            <Notes />
        </>
    )
}

export default App
