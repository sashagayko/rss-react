import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { inputReducer } from './reducers';

const rootReducer = combineReducers({
  inputReducer: inputReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
