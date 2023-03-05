import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCourse } from './store';

export const GetCourses = () => {
  const dispatch = useDispatch();
  console.log('dispatch');
  axios
    .get('http://localhost:4000/courses/all')
    .then((response) => {
      console.log('response');
      return response.data.result;
      dispatch(addCourse(response.data.result[0]));
    })
    .catch((error) => {
      console.error(error.response);
    });
};

export const GetAuthors = () => {
  const dispatch = useDispatch();
  axios
    .get('http://localhost:4000/authors/all')
    .then((response) => {
      console.log('Authors: ');
      console.log(response.data.result);
    })
    .catch((error) => {
      console.error(error.response);
    });
};
