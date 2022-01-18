import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import noteReducer from './reducer/noteReducer'
import filterReducer from './reducer/filterReducer'

const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store

