import { takeEvery } from 'redux-saga/effects';
import {Todo, getTodos } from '../../lib/api';
import * as actionTypes from '../actions/action_types';
import { put } from 'redux-saga/effects';

function* getTodosAction() {
    const todos: Todo[] = yield getTodos();
    console.log('Fetched todos:', todos);
    yield put({ type: actionTypes.GET_TODOS, payload: todos });
}

function* rootSaga() {
  yield takeEvery(actionTypes.GET_TODOS, getTodosAction);
}

const initialState: Todo[] = [
  { id: 1, title: 'Learn Redux', completed: false },
  { id: 2, title: 'Implement Todo App', completed: false },
  { id: 3, title: 'Test Todo App', completed: false }
  ];

const todoReducer = (state = initialState, action: any): Todo[] => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, action.payload];
    case actionTypes.REMOVE_TODO:
      console.log('Removing todo with id:', action.payload);
      return state.filter(todo => todo.id !== action.payload);
    case actionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
