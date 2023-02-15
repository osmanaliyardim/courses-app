import { React, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import styles from '../Courses/Courses.module.css';

const Courses = ({ courses, authors }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const showCreateCourse = () => {
    document.getElementById('courses').style.display = 'none';
    document.getElementById('createCoursePortal').style.display = 'block';
  };

  return (
    <div id='courses'>
      <div className={styles.coursesBar}>
        <SearchBar onChange={handleChange}></SearchBar>
        <Button buttonText='Add New Course' onClick={showCreateCourse}></Button>
      </div>

      {courses?.length
        ? courses
            .filter((element) =>
              element.title?.includes(query.toLocaleLowerCase())
            )
            .map((course) => {
              return (
                <div key={course.id} className={styles.courseCard}>
                  <CourseCard course={course} author={authors}></CourseCard>
                </div>
              );
            })
        : null}
    </div>
  );
};

export default Courses;
