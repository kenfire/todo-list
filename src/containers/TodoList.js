import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'

class TodoList extends Component {
  render () {
    return (
      <ul>
        {this.props.todoList.map((todo, key) => (
          <Todo key={key} todo={todo}{...todo}/>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  }
}

export default connect(mapStateToProps)(TodoList)
