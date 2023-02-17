import React, { Component } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

export default class Inputtodo extends Component {
    state ={
      des : ''
    }
  render() {
    
    return (
      <div>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
           onChange={(el)=> this.setState({des :el.target.value })}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={() => this.props.handleAdd({id: Date.now(), description:this.state.des, done:false}) }>
         add task
        </Button>
      </InputGroup>
      </div>
    )
  }
}
