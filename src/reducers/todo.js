import { ADD_TODO, FETCH_TODO_LIST } from '../actions/types'

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {text: action.payload}]
    case FETCH_TODO_LIST:
      return action.payload
    default:
      return state
  }
}

export default(todoReducer)
