import { combineReducers } from 'redux'
import marketReducer from './marketReducer'

export default combineReducers({ market: marketReducer })
