import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  user: {
    isAuth: false,
    name: '',
    email: '',
    token: '',
  },
  courses: [],
  authors: [],
};

const courses = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.courses = [action.payload, ...state.courses];
    },
    addAuthor: (state, action) => {
      state.authors = action.payload;
    },
    deleteCourse: (state, action) => {
      const indexOfObject = state.courses.findIndex((object) => {
        return object.id === action.payload;
      });
      state.courses.splice(indexOfObject, 1);
    },
    createAuthor: (state, action) => {
      state.authors = [action.payload, ...state.authors];
    },
    saveUser: (state, action) => {
      state.user = {
        isAuth: action.payload[0],
        name: action.payload[1],
        email: action.payload[2],
        token: action.payload[3],
      };
    },
  },
});

export const { addCourse } = courses.actions;
export const { deleteCourse } = courses.actions;
export const { addAuthor } = courses.actions;
export const { createAuthor } = courses.actions;
export const { saveUser } = courses.actions;
export default courses.reducer;
