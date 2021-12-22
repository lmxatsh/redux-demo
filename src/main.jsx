import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CounterStore from './CounterStore'

const renderApp = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    )
}
renderApp()
CounterStore.subscribe(renderApp)
