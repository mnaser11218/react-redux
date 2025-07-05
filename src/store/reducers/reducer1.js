import * as actionTypes from '../actions/action_types'

export const initialState = {
stateprop1: false,
names: ['Alice', 'Bob', 'Charlie']
};

const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUCCESS:
      return {
        ...state,
       stateprop1: true
      };
    case actionTypes.NULL:
      return {
        ...state,
        stateprop1: null
      };
    case actionTypes.FAILURE:
      return {
        ...state,
        stateprop1: false
      };
    case actionTypes.ADD_NAME:
      return {
        ...state,
        names: [...state.names, action.payload]
      };
    case actionTypes.REMOVE_LAST_NAME:
      return {
        ...state,
        names: state.names.slice(0, -1)
      };
    default:
      return state;
  }
};

export default firstReducer;
// This reducer handles the success and failure actions, updating the state accordingly.
// The initial state is set to have stateprop1 as false.