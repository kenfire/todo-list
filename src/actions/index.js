import { FETCH_TODO_LIST } from './types'
import { db } from '../Firebase'

const todoList = db.ref().child('todoList')

export const addTodo = todo => {
  return dispatch => todoList.push({text: todo})
}

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