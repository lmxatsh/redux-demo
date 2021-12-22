import CounterStore from './CounterStore'

function App() {
    return (
        <>
            <h1>React App</h1>
            <div>{CounterStore.getState()}</div>
            <button
                onClick={(e) => CounterStore.dispatch({ type: 'INCREMENT' })}
            >
                plus
            </button>
            <button
                onClick={(e) => CounterStore.dispatch({ type: 'DECREMENT' })}
            >
                minus
            </button>
            <button onClick={(e) => CounterStore.dispatch({ type: 'ZERO' })}>
                reset
            </button>
        </>
    )
}

export default App
