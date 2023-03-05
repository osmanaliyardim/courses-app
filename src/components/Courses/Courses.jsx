import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import getCoursesDuration from '../../helpers/getCoursesDuration';
import styles from '../Courses/Courses.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addAuthor, addCourse } from '../../store';

const Courses = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const navigate = useNavigate();

  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    let endpoints = [
      'http://localhost:4000/courses/all',
      'http://localhost:4000/authors/all',
    ];

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(
        axios.spread(({ data: courses }, { data: authors }) => {
          dispatch(addCourse(courses.result[0]));
          dispatch(addAuthor(authors.result));
        })
      )
      .catch((error) => {
        console.error(error.response);
      });
  }, []);

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
            ></CourseCard>
          );
        })}
    </div>
  );
};

export default Courses;
