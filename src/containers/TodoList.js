import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Todo from '../components/Todo'
import { fetchTodoList } from '../actions'

class TodoList extends Component {
  componentWillMount () {
    this.props.fetchTodoList()
  }

  renderTodoList () {
    return _.map(this.props.todoList, (todo, key) => {
      return <Todo key={key} todo={todo}{...todo}/>

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
    fetchTodoList: () => {dispatch(fetchTodoList())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
