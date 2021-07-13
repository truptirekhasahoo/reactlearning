import { createStore, combineReducers, applyMiddleware } from 'redux'
import myReducer from '../Reducer/reducer'
import logger from 'redux-logger'

const combinedReducers = combineReducers({myReducer});

const mystore = createStore(combinedReducers, applyMiddleware(logger));

export default mystore
