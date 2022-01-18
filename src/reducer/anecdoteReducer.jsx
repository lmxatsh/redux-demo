const anecdoteReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_ANECDOTE':
            return state.concat(action.data)
        case 'ADD_VOTE':
            const id = action.data.id
            const anecdoteToChange = state.find((_) => _.id === id)
            const changedAnecdote = {
                ...anecdoteToChange,
                vote: anecdoteToChange.vote + 1,
            }
            return state.map((_) => (_.id === id ? changedAnecdote : _))
        default:
            return state
    }
}

const generateId = () => Number(Math.random() * 10000000).toFixed(0)

export const createAnecdote = (content) => {
    const newAnecdote = {
        id: generateId(),
        content: content,
        vote: 0,
    }
    return {
        type: 'NEW_ANECDOTE',
        data: newAnecdote,
    }
}

export const addVote = (id) => {
    return {
        type: 'ADD_VOTE',
        data: { id },
    }
}

export default anecdoteReducer
