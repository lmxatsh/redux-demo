import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import noteReducer, {initializeNotes} from './reducer/noteReducer'
import filterReducer from './reducer/filterReducer'
import noteService from './service/notes'

const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer,
})

const store = createStore(reducer)

noteService.getAll().then(notes =>
    store.dispatch(initializeNotes(notes)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
