import * as actionTypes from '../actions/action_types'

export const initialState = {
  user_reducer_over_18: false,
  names: ['mnaser@gmail.com', 'Bob@gmail.com', 'Charlie@gmail.com']
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USERNAME:
      return {
        ...state,
        names: [...state.names, action.payload]
      };
    default:
      return state;
  }
}