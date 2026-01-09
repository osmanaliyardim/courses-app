import React from 'react';
import { useSelector } from 'react-redux';
import CourseForm from '../CourseForm/CourseForm';

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.courses.user);

  if (user.role === 'admin') {
    return <CourseForm />;
  } else return children;
};

export default PrivateRoute;
