import multi from 'redux-multi'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/index'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(multi)
)

export default store
