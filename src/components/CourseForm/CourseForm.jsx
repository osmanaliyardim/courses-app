import React, { useState } from 'react';
import getCoursesDuration from '../../helpers/getCoursesDuration';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { useNavigate } from 'react-router-dom';
import styles from './CourseForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse, createAuthor } from '../../store';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

const CourseForm = () => {
  const [authorInput, setAuthorInput] = useState('');
  const [duration, setDuration] = useState();
  const [courseAuthors, setCourseAuthors] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.courses.authors);

  const handleChange = (event) => {
    setAuthorInput(event.target.value);
  };

  const addAuthor = (author) => {
    if (courseAuthors.includes(author)) return;

    setCourseAuthors([...courseAuthors, author]);
  };

  const deleteAuthor = (authorName) => {
    setCourseAuthors(courseAuthors.filter((item) => item !== authorName));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addCourse({
        title: event.target.elements.title.value,
        description: event.target.elements.description.value,
        duration: Number(event.target.elements.duration.value),
        authors: courseAuthors.map((author) => {
          return author.id;
        }),
      })
    );

    navigate('/courses');
  };

  return (
    <form onSubmit={(event) => handleFormSubmit(event)}>
      <div className={styles.createCoursePortal}>
        <div className={styles.createCourseForm}>
          <div className={styles.titleInput}>
            <Input
              labelText={'Title'}
              placeholderText={'Enter Title...'}
              inputName={'title'}
              inputType={'text'}
              isRequired={true}
            />
          </div>
          <Button buttonText={'Create course'} btnType={'submit'} />
        </div>
        <Input
          className={styles.descriptionInput}
          labelText={'Description'}
          placeholderText={'Enter Description..'}
          inputName={'description'}
          inputType={'textarea'}
          isRequired={true}
          minLength={'2'}
        />
        <div className={styles.labels}>
          <h2>Add author</h2>
          <h2>Authors</h2>
        </div>
        <div className={styles.createAuthorForm}>
          <div className={styles.createAuthorFormHeader}>
            <Input
              labelText={'Author name'}
              placeholderText={'Enter author name...'}
              inputName={'authorName'}
              inputType={'textarea'}
              minLength={'2'}
              inputValue={authorInput}
              onChange={handleChange}
            />
            <div className={styles.createAuthorFormBody}>
              <Button
                btnType={'button'}
                buttonText={'Create author'}
                onClick={() => {
                  dispatch(createAuthor(authorInput));
                }}
              />
            </div>
          </div>
          <div className={styles.addAuthorForm}>
            {authors.map((element, index) => (
              <AuthorItem
                key={index}
                authorName={element.name}
                btnText='Add author'
                btnOnClick={() => addAuthor(element)}
                btnType={'button'}
              />
            ))}
          </div>
        </div>
        <div className={styles.labels}>
          <h2>Duration</h2>
          <h2>Course authors</h2>
        </div>
        <div className={styles.labels}>
          <div className={styles.durationInput}>
            <Input
              labelText={'Duration'}
              placeholderText={'Enter duration in minutes...'}
              inputName={'duration'}
              inputType={'number'}
              inputValue={duration}
              isRequired={true}
              onChange={(e) => setDuration(e.target.value)}
            />
            <h2 className={styles.duration}>
              Duration: {getCoursesDuration(duration)}
            </h2>
          </div>
          <div className={styles.deleteAuthorForm}>
            {courseAuthors.map((element, index) => {
              return (
                <AuthorItem
                  key={index}
                  authorName={element.name}
                  btnOnClick={() => deleteAuthor(element)}
                  btnText='Delete author'
                  btnType={'button'}
                />
              );
            })}
          </div>
        </div>
      </div>
    </form>
  );
};

export default CourseForm;
