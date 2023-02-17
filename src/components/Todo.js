import React from 'react'
import './Todo.css'

const Todos = ({task: {id, description, done}, handleDone,handleDelete}) => {
  return (
    <div>
        <span className={done ? 'done': 'undone'}>{description}</span>
        <button onClick={() => handleDelete(id)}>Delete</button>
        <button onClick={() => handleDone(id)}>done / undone</button>
    </div>
  )
}

export default Todos