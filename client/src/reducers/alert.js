import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

// Alert reducer defined without any name
export default function (state = initialState, action) {
  const { type, payload } = action; // Destructuring

  switch (type) {
    case SET_ALERT:
      return [...state, payload]; // Spread operator to retain any existing alert
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
