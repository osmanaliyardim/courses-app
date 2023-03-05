import React from 'react';
import Button from '../../../../common/Button/Button';
import { Link } from 'react-router-dom';
import getAuthorNames from '../../../../helpers/getAuthorNames';
import styles from './CourseCard.module.css';

const CourseCard = ({
  id,
  title,
  description,
  creationDate,
  duration,
  authors,
}) => {
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseCardHeader}>
        <h1 className={styles.title}>{title}</h1>
        <div>{description}</div>
      </div>
      <div className={styles.courseCardBody}>
        <div className={styles.authorNames}>
          Authors: {getAuthorNames(authors).join(', ')}
        </div>
        <div>Duration: {duration}</div>
        <div>Created: {creationDate}</div>
        <div className={styles.showCourseLink}>
          <Link to={`/courses/${id}`}>
            <Button buttonText={'Show Course'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
