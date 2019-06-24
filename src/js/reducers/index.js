import { combineReducers } from 'redux'
import marketReducer from './marketReducer'
import playerReducer from './playerReducer'

export default combineReducers({ market: marketReducer, players: playerReducer })
