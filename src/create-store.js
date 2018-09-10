import { createHashHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'

export const history = createHashHistory()

const rootReducer = () => {}

export const store = createStore(
  connectRouter(history)(rootReducer),
  compose(applyMiddleware(routerMiddleware(history)))
)
