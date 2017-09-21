import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Todo from '../components/Todo'
import { deleteTodo, fetchTodoList } from '../actions'

class TodoList extends Component {
  componentWillMount () {
    this.props.fetchTodoList()
  }

  renderTodoList () {
    return _.map(this.props.todoList, (todo, key) => {
      return <Todo key={key} todo={todo}{...todo} onClick={() => this.props.deleteTodo(key)}/>
    })
  }

  render () {
    return (
      <ul>
        {this.renderTodoList()}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchTodoList: () => {dispatch(fetchTodoList())},
    deleteTodo: (key) => {dispatch(deleteTodo(key))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
