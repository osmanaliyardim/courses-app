import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  user: {
    isAuth: '',
    email: '',
    token: '',
    role: '',
  },
  courses: [],
  authors: [],
};

export const fetchCourses = createAsyncThunk('fetchCourses', async () => {
  const response = await axios.get('http://localhost:4000/courses/all');
  return response.data.result[0];
});

export const fetchAuthors = createAsyncThunk('fetchAuthors', async () => {
  const response = await axios.get('http://localhost:4000/authors/all');
  return response.data.result;
});

export const logout = createAsyncThunk('logout', async () => {
  const token = localStorage['userToken'];

  const response = await axios.delete('http://localhost:4000/logout', {
    headers: {
      Authorization: token,
    },
  });

  return response.data.result;
});

export const getCurrentUser = createAsyncThunk('getCurrentUser', async () => {
  if (localStorage['userToken']) {
    const token = localStorage['userToken'];
    const response = await axios.get('http://localhost:4000/users/me', {
      headers: {
        Authorization: token,
      },
    });
    return response.data.result;
  }
  return;
});

export const deleteCourse = createAsyncThunk('deleteCourse', async (id) => {
  const response = await axios.get(`http://localhost:4000/courses/${id}`);
  return response.data.result;
});

export const addCourse = createAsyncThunk('addCourse', async (courseData) => {
  const token = localStorage['userToken'];

  const response = await axios.post(
    'http://localhost:4000/courses/add',
    courseData,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response.data.result;
});

export const createAuthor = createAsyncThunk(
  'createAuthor',
  async (authorName) => {
    const token = localStorage['userToken'];
    const response = await axios.post(
      'http://localhost:4000/authors/add',
      {
        name: authorName,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data.result;
  }
);

const courses = createSlice({
  name: 'courses',
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    // Courses
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.courses = [action.payload, ...state.courses];
    });
    builder.addCase(fetchCourses.rejected, () => {
      console.error('fetchCourses rejected');
      console.error('Error Ocurred!');
    });

    // Authors
    builder.addCase(fetchAuthors.fulfilled, (state, action) => {
      state.authors = action.payload;
    });
    builder.addCase(fetchAuthors.rejected, () => {
      console.error('fetchAuthors rejected');
      console.error('Error Ocurred!');
    });

    // Users
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getCurrentUser.rejected, () => {
      console.error('getCurrentUser rejected');
      console.error('Error Ocurred!');
    });

    // Delete Course
    builder.addCase(deleteCourse.fulfilled, (state, action) => {
      const indexOfObject = state.courses.findIndex((object) => {
        return object.id === action.payload.id;
      });
      state.courses.splice(indexOfObject, 1);
    });
    builder.addCase(deleteCourse.rejected, () => {
      console.error('deleteCourse rejected');
      console.error('Error Ocurred!');
    });

    // Add Course
    builder.addCase(addCourse.fulfilled, (state, action) => {
      state.courses = [action.payload, ...state.courses];
    });
    builder.addCase(addCourse.rejected, () => {
      console.error('addCourse rejected');
      console.error('Error Ocurred!');
    });

    // Add Author
    builder.addCase(createAuthor.fulfilled, (state, action) => {
      state.authors = [action.payload, ...state.authors];
    });
    builder.addCase(createAuthor.rejected, () => {
      console.error('createAuthor rejected');
      console.error('Error Ocurred!');
    });
  },
});

export const { saveUser } = courses.actions;

export default courses.reducer;
