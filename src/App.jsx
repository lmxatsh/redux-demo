import { createNote, toggleImportanceOf } from './reducer/noteReducer'
import { useSelector, useDispatch } from 'react-redux'
import Notes from './Notes'
import NewNote from './NewNote'
import VisibilityFilter from './VisibilityFilter'

function App() {
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
