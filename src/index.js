import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {applyMiddleware,  createStore } from 'redux'
import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers'
import reduxThunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
  , document.getElementById('root'))

registerServiceWorker()
