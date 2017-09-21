import React from 'react'
import Button from 'material-ui/Button'
import { TableCell, TableRow } from 'material-ui/Table'

const Todo = ({text, onClick}) => (
  <TableRow>
    <TableCell> {text} </TableCell>
    <TableCell><Button raised color="accent" onClick={onClick}>Delete</Button></TableCell>
  </TableRow>

)

export default Todo