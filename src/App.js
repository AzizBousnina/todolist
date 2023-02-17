import React, { Component } from 'react'
import Inputtodo from './components/Inputtodo'
import TodoList from './components/TodoList'
import './index.css'

export default class App extends Component {
  state = {
tasks: [
{
  id: 1,
  description: 'clean the room !',
  done:false,
},
{
  id: 2,
  description: 'wash the car !',
  done:false,
},
{
  id: 3,
  description: 'doing homework !',
  done:false,
},
]
 }

 doneTask = (id) => {
  this.setState({
    tasks: this.state.tasks.map((el) =>
    el.id === id ? {...el, done: ! el.done} : el

    )
  })
 }

deleteTask = (id) => {
this.setState ({
tasks : this.state.tasks.filter((el) => el.id !== id)



})


}

addTask = (task) => {
  this.setState({tasks: [...this.state.tasks, task]})
}


 

  render() {
    return (
      <div className='App'>
        <h1> ToDoList </h1>
      <TodoList todos={this.state.tasks} 
      handleDone={this.doneTask}
      handleDelete ={this.deleteTask} 
      />
   <Inputtodo handleAdd={this.addTask}/>

      </div>

    )
  }
}
