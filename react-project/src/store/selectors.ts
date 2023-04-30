import { State } from '../types';

export const inputValueSelector = (state: State) => state.inputReducer.inputValue;
