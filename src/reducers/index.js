import { combineReducers } from 'redux'
import todoReducer from './todo'

const rootReducer = combineReducers({
  todoList: todoReducer
})

export default rootReducer