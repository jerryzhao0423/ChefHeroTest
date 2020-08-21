import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'
import { Route, Router } from 'react-router'
import allReducers from './reducers/index'
import App from './App'

const history = createBrowserHistory()
const router = routerMiddleware(history)

const enhancer = applyMiddleware(thunk, router)
const store = createStore(allReducers, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
