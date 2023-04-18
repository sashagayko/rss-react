import { SAVE_INPUT_VALUE } from '../consts';

export function saveValue(value: string) {
  return { type: SAVE_INPUT_VALUE, payload: value };
}
