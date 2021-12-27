import NoteStore from './NoteStore'

function App() {
    return (
        <>
            <h1>React App</h1>
            <u1>
                {NoteStore.getState().map((note) => (
                    <li key={note.id}>
                        {note.content}{' '}
                        <strong>{note.important ? 'important' : ''}</strong>
                    </li>
                ))}
            </u1>
        </>
    )
}

export default App
