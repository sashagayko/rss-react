import { Action } from '../types';
import { SAVE_INPUT_VALUE } from '../consts';

const initialState = {
  inputValue: '',
};

export const inputReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SAVE_INPUT_VALUE:
      return { inputValue: action.payload };
    default:
      return state;
  }
};
