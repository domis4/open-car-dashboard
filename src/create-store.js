import { createHashHistory } from 'history'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import notifications from './redux/notifications'

export const history = createHashHistory()

const rootReducer = combineReducers({ notifications })

export const store = createStore(
  connectRouter(history)(rootReducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(routerMiddleware(history)))
)
