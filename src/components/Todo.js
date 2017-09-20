import React from 'react'
import Button from 'material-ui/Button'

const Todo = ({text, onClick}) => (
  <div>
    <li> {text} </li>
    <Button raised color="accent" onClick={onClick}>Delete</Button>
  </div>

)

export default Todo