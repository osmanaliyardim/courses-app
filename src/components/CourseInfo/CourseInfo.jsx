import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './CourseInfo.module.css';
import { useSelector } from 'react-redux';

import Button from '../../common/Button/Button';
import getCoursesDuration from '../../helpers/getCoursesDuration';
import getAuthorNames from '../../helpers/getAuthorNames';

const CourseInfo = () => {
  let { courseId } = useParams();
  let title;
  let description;
  let duration;
  let authors;
  let creationDate;

  const courses = useSelector((state) => state.courses.courses);

  courses.forEach((element) => {
    if (courseId == element.id) {
      title = element.title;
      description = element.description;
      duration = element.duration;
      authors = element.authors;
      creationDate = element.creationDate;
    }
  });

  const leftArrowUnicode = '\u1438';

  return (
    <div className={styles.courseInfoForm}>
      <div className={styles.backToCoursesLink}>
        <Link to={'/courses'}>
          <Button buttonText={' ' + leftArrowUnicode + ' Back to courses'} />
        </Link>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.formBody}>
        <div className={styles.description}>{description}</div>
        <div className={styles.coursesForm}>
          <div>
            <p className={styles.properties}>ID: </p>
            {courseId}
          </div>
          <div>
            <p className={styles.properties}>Duration: </p>
            {getCoursesDuration(duration)}
          </div>
          <div>
            <p className={styles.properties}>Created: </p>
            {creationDate}
          </div>
          <div>
            <p className={styles.authorsProperties}>Authors: </p>
            {authors.map((element, index) => {
              <p key={index}>{getAuthorNames(element)}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
