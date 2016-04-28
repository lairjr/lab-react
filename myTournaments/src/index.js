import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/Main'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import gameLiveReducer from './reducers/gameLiveReducer'

const gameLiveStore = createStore(gameLiveReducer)

// Render the main component into the dom
ReactDOM.render(<Provider store={gameLiveStore}>
                  <App />
                </Provider>,
                document.getElementById('app'));
