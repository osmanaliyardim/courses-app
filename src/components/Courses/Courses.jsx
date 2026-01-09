import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import getCoursesDuration from '../../helpers/getCoursesDuration';
import styles from '../Courses/Courses.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, fetchAuthors, getCurrentUser } from '../../store';

const Courses = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(fetchCourses());
    dispatch(fetchAuthors());
  }, []);

  const user = useSelector((state) => state.courses.user);

  let isAdmin = false;

  if (user.role === 'admin') {
    isAdmin = true;
  }

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
        {isAdmin && (
          <Button
            buttonText={'Add new course'}
            onClick={() => navigate('/courses/add')}
          />
        )}
      </div>
      {courses
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
              isAdmin={isAdmin}
            ></CourseCard>
          );
        })}
    </div>
  );
};

export default Courses;
