import React, { useEffect } from 'react';
import Courses from '../src/components/Courses/Courses';
import Header from './components/Header/Header';
import { mockCourses, mockAuthors } from './data/data';
import CreateCourse from './components/CreateCourse/CreateCourse';

const App = () => {
  const [course, setCourse] = React.useState();
  const [author, setAuthor] = React.useState();
  useEffect(() => {
    setCourse(mockCourses);
    setAuthor(mockAuthors);
  }, []);

  return (
    <>
      <Header className='mb-3'></Header>
      <Courses courses={course} authors={author} className='mb-3' />
      <CreateCourse
        course={course}
        author={author}
        setCourse={setCourse}
        className='mt-3'
      />
    </>
  );
};

export default App;
