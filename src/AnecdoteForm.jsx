import { useDispatch, useSelector } from 'react-redux'
import { createAnecdote } from './reducer/anecdoteReducer'

export default function AnecdoteForm() {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        console.log({ content })
        dispatch(createAnecdote(content))
        event.target.anecdote.value = ''
    }

    return (
        <form onSubmit={addAnecdote}>
            <input name="anecdote"></input>
            <button type="submit">add</button>
        </form>
    )
}
