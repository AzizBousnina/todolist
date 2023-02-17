import React from 'react'
import Todo from './Todo'


const TodoList = ({todos,handleDone,handleDelete}) => {
  return (
    <div>
   {todos.map((task,key) => (
<Todo task={task} key={key} handleDone={handleDone} handleDelete={handleDelete}/>
  
   
))}     

    </div>
  )
}

export default TodoList