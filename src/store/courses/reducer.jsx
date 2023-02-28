import { initialState } from '..';

export const addCourse = (state = initialState, action) => {
  state.courses = [action.payload, ...state.courses];
};
