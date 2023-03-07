import { createStore } from 'redux';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LAST_API_RESULT':
      return {
        ...state,
        lastApiResult: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;