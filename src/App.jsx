import { useEffect } from 'react'
import { initializeNotes } from './reducer/noteReducer'
import { useDispatch } from 'react-redux'
import Notes from './Notes'
import NewNote from './NewNote'
import VisibilityFilter from './VisibilityFilter'
import AnecdoteForm from './AnecdoteForm'
import AnecdoteList from './AnecdoteList'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeNotes())
    }, [])

    return (
        <>
            <h1>Redux App</h1>
            <NewNote />
            <VisibilityFilter />
            <Notes />
            <h1>Anecdotes</h1>
            <AnecdoteForm />
            <AnecdoteList />
        </>
    )
}

export default App
