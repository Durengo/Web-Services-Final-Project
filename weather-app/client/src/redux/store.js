import {legacy_createStore, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from "./reducer";

// Create the Redux store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;