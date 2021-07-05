import {createStore, combineReducers} from 'redux'
import myReducer from '../Reducer/reducer'

const combinedReducers=combineReducers({myReducer})
const mystore=createStore(combineReducers)

export default mystore