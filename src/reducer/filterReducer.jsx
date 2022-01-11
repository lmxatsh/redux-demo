const filterReducer = (state = 'ALL', action) => {
    console.log('Action:', action)
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter
        default:
            return state
    }
}

export const filterChange = (filter) => ({
    type: 'SET_FILTER',
    filter,
})

export default filterReducer
