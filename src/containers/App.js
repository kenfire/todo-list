import React, { Component } from 'react'
import logo from '../logo.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Paper from 'material-ui/Paper';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to Todo List app</h2>
        </div>
        <Paper>
          <TodoList/>
        </Paper>
        <AddTodo/>
      </div>
    )
  }
}

export default App
