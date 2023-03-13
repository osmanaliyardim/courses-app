import React from 'react';
import Button from '../../../../common/Button/Button';
import { Link } from 'react-router-dom';
import getAuthorNames from '../../../../helpers/getAuthorNames';
import styles from './CourseCard.module.css';
import { useDispatch } from 'react-redux';
import { deleteCourse } from '../../../../store';

const CourseCard = ({
  id,
  title,
  description,
  creationDate,
  duration,
  authors,
  isAdmin,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.courseCard}>
      <div className={styles.courseCardHeader}>
        <h1 data-testid='title' className={styles.title}>
          {title}
        </h1>
        <div data-testid='description'>{description}</div>
      </div>
      <div className={styles.courseCardBody}>
        <div data-testid='authors' className={styles.authorNames}>
          Authors: {getAuthorNames(authors).join(', ')}
        </div>
        <div data-testid='duration'>Duration: {duration}</div>
        <div data-testid='creationDate'>Created: {creationDate}</div>
        <div className={styles.showCourseLink}>
          <Link to={`/courses/${id}`}>
            <Button buttonText={'Show Course'} />
          </Link>
          {isAdmin && (
            <>
              <Button
                buttonText={'Delete'}
                onClick={() => {
                  dispatch(deleteCourse(id));
                }}
              />
              <Button buttonText={'Edit'} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
