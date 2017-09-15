import { FETCH_TODO_LIST } from './types'
import { db } from '../Firebase'

const todoList = db.ref().child('todoList')

export const addTodo = todo => {
  // this will trigger fetchTodoList because of componentWillMount() from the TodoList container
  return dispatch => todoList.push({text: todo})
}

// Fetch from  Firebase database
export const fetchTodoList = () => {
  return dispatch => {
    todoList.on('value', snapshot => {
      dispatch({
        type: FETCH_TODO_LIST,
        payload: snapshot.val()
      })
    })
  }
}