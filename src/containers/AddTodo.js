import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

class AddTodo extends React.Component {
  render () {
    let input

    return (
      <div>
        <form
          onSubmit={
            e => {
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }
              this.props.addTodo(input.value)
              input.value = ''
            }
          }
        >
          <TextField
            inputRef={node => {
              input = node
            }}
          />
          <Button raised color="primary"  type="submit">
            Add Todo
          </Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {dispatch(addTodo(text))}
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)
