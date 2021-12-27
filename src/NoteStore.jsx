import { createStore } from 'redux'
import noteReducer from './reducer/noteReducer'

const NoteStore = createStore(noteReducer)

export default NoteStore
