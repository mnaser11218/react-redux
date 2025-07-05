import * as actionTypes from './action_types';

export const successAction = () =>{
    return {
      type: actionTypes.SUCCESS,
    };
  }

export const nullAction = () => {
    return {
      type: actionTypes.NULL,
    };
  }

export const failureAction = () => {
    return {
      type: actionTypes.FAILURE,
    };
  }

export const addNameAction = (name) => {
    return {
      type: actionTypes.ADD_NAME,
      payload: name
    };
  }

  export const removeLastNameAction = () => {
    return {
      type: actionTypes.REMOVE_LAST_NAME,
    };
  }


export const addUsernameAction = (username) => {
    return {
      type: actionTypes.ADD_USERNAME,
      payload: username
    };
  }

export const addTodoAction = (todo) => {
    return {
      type: actionTypes.ADD_TODO,
      payload: todo
    };
  }

  export const removeTodoAction = (id) => {
    return {
      type: actionTypes.REMOVE_TODO,
      payload: id
    };
  }


