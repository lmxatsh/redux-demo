import { createNote, toggleImportanceOf } from './reducer/noteReducer'
import { useSelector, useDispatch } from 'react-redux'
import Notes from './Notes'
import NewNote from './NewNote'

function App() {
    return (
        <>
            <h1>Redux App</h1>
            <NewNote />
            <Notes />
        </>
    )
}

export default App
