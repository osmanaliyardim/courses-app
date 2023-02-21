import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import getCoursesDuration from '../../helpers/getCoursesDuration';
import { mockCourses } from '../../data/data';
import styles from '../Courses/Courses.module.css';

const Courses = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('userToken')) {
      navigate('/register');
    } else {
      navigate('/courses');
    }
  }, []);

  return (
    <div className={styles.coursesForm}>
      <div className={styles.coursesFormHead}>
        <SearchBar onChange={handleChange} />
        <Button
          buttonText={'Add new course'}
          onClick={() => navigate('/courses/add')}
        />
      </div>
      {mockCourses
        .filter((course) =>
          course.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
        .map((element, index) => {
          return (
            <CourseCard
              key={index}
              id={element.id}
              title={element.title}
              description={element.description}
              creationDate={element.creationDate}
              duration={getCoursesDuration(element.duration)}
              authors={element.authors}
            ></CourseCard>
          );
        })}
    </div>
  );
};

export default Courses;
