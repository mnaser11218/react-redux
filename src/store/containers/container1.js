import * as actionTypes from '../actions/action_types'
import * as actions from '../actions/actions'
import React from 'react';
import { connect } from 'react-redux';


class Container1 extends React.Component {
  handleSuccess = () => {
    this.props.onSuccess();
  };

  handleFailure = () => {
    this.props.onFailure();
  };
    handleNull = () => {
        this.props.onNull();
    };

  render() {
    return (
      <div>
        <button onClick={this.handleSuccess}>Success</button>
        <button onClick={this.handleFailure}>Failure</button>
        <button onClick={this.handleNull}>Null</button>
        <button onClick={() => console.log(this.props.stateprop1)}>Log State</button>
        <input type="text" placeholder="Enter name" ref={input => this.nameInput = input} />
        <button onClick={() => this.props.addName(this.nameInput.value)}>Add Name</button>
      <button onClick={()=> this.props.removeLastName()} >Remove Last Name</button>
        {this.props.names.map(name => <div key={name}>{name}</div>)}

        <div>
          Todos:
          {/* This is where you can add your Todo component or list */}
          <ul>
            {this.props.todos.map(todo => (
              <li key={todo.id}>
                {todo.title}
              {console.log(todo.id) /* Debugging log to check todo id */}
                <button onClick={() => this.props.removeTodo(todo.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

// this is the mapStateToProps function that maps the state to props
// it takes the state as an argument and returns an object with the state properties
function mapStateToProps(state) {
  return {
    stateprop1: state.root.stateprop1,
    names: state.root.names,
    todos: state.todo // Assuming you have a todo reducer that manages todos
  };
}

// this is the mapDispatchToProps function that maps dispatch to props
function mapDispatchToProps(dispatch) {
  return {
    onSuccess: () => dispatch(actions.successAction()),
    onFailure: () => dispatch(actions.failureAction()),
    onNull: () => dispatch(actions.nullAction()),
    addName: (name) => dispatch(actions.addNameAction(name)),
    removeLastName: () => dispatch(actions.removeLastNameAction()),
    removeTodo: (id) => dispatch(actions.removeTodoAction(id)),
    addToDo: (todo) => dispatch(actions.addTodoAction(todo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);