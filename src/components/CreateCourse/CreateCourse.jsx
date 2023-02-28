import React, { useState } from 'react';
import formatCreationDate from '../../helpers/formatCreationDate';
import getCoursesDuration from '../../helpers/getCoursesDuration';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { useNavigate } from 'react-router-dom';
import styles from './CreateCourse.module.css';
import createGuid from '../../helpers/createGuid';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse, createAuthor } from '../../store';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

function CreateCourse() {
  const [authorInput, setAuthorInput] = useState('');
  const [duration, setDuration] = useState();
  const [courseAuthors, setCourseAuthors] = useState([]);
  const navigate = useNavigate();
  const authors = useSelector((state) => state.courses.authors);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setAuthorInput(event.target.value);
  };

  const addAuthor = (authorName) => {
    if (courseAuthors.includes(authorName)) return;

    setCourseAuthors([...courseAuthors, authorName]);
  };

  const deleteAuthor = (authorName) => {
    setCourseAuthors(courseAuthors.filter((item) => item !== authorName));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addCourse({
        id: createGuid(),
        title: event.target.elements.title.value,
        description: event.target.elements.description.value,
        creationDate: formatCreationDate(),
        duration: event.target.elements.duration.value,
        authors: courseAuthors,
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
                  let shouldReturn = false;
                  authors.forEach((element) => {
                    if (element.name === authorInput) {
                      shouldReturn = true;
                      return;
                    }
                  });
                  if (shouldReturn) return;
                  dispatch(
                    createAuthor({ name: authorInput, id: createGuid() })
                  );
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
                btnOnClick={() => addAuthor(element.id)}
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
            {courseAuthors.map((element, index) => (
              <AuthorItem
                key={index}
                authorName={element}
                btnOnClick={() => deleteAuthor(element)}
                btnText='Delete author'
                btnType={'button'}
              />
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateCourse;
