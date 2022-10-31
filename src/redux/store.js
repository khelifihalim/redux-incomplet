//import  { configureStore,} from '@reduxjs/toolkit'
import {combineReducers,  createStore}  from "redux";
import reducerAddTasks from './reducers/reducerAddTasks';


const rootReducer = combineReducers({
    bankData : reducerAddTasks
})

const store = createStore (rootReducer)

export default store

