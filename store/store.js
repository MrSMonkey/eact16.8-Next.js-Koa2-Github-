import { combineReducers, createStore, applyMiddleware } from 'redux';
import RuduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const ADD = 'ADD';

const countInitialState = {
  count: 0,
};

function countReducer(state = countInitialState, action) {
  // console.log(state, action);
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + (action.num || 1) };
      break;
  
    default:
      return state;
      break;
  }
}

const UPDATE_USERNAME = 'UPDATE_USERNAME';

const userInitialReducer = {
  userName: 'jocker'
};

function userReducer(state = userInitialReducer, action) {
  // console.log(state, action);
  switch (action.type) {
    case UPDATE_USERNAME:
      return { ...state, userName: action.name };
      break;
  
    default:
      return state;
      break;
  }
}

const allReducer = combineReducers({
  counter: countReducer,
  user: userReducer,
})

const store = createStore(
  allReducer,
  {
    counter: countInitialState,
    user: userInitialReducer,
  },
  composeWithDevTools(applyMiddleware(RuduxThunk))
);

console.log(store, store.getState());
store.dispatch({ type: UPDATE_USERNAME, name: 'lilei' });


// action
const add = (num) => {
  return {
    type: ADD,
    num
  }
}
// action
const addAsync = (num) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(add(num))
    }, 1000);
  }
}

store.subscribe(() => {
  console.log(store.getState());
})
store.dispatch(add(3))
store.dispatch(addAsync(5))

export default store;