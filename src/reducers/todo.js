import { ADD_TODO } from '../actions/types'

const initState = [{text: 'Task 1'}, {text: 'Task 2'}]

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {text:action.payload}]
    default:
      return state
  }
}

export default(todoReducer)
