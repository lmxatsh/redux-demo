import { useDispatch, useSelector } from 'react-redux'
import { addVote } from './reducer/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <li>
            {anecdote.content}
            <br />
            {anecdote.vote}
            <button onClick={handleClick}>vote</button>
        </li>
    )
}

export default function AnecdoteList() {
    const dispatch = useDispatch()
    const anecdotes = useSelector((state) => state.anecdotes)
    //console.log({anecdates})
    anecdotes.sort((a, b) => b.vote - a.vote)
    return (
        <ul>
            {anecdotes.map((anecdote) => (
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => dispatch(addVote(anecdote.id))}
                />
            ))}
        </ul>
    )
}
