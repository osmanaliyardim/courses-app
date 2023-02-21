import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './CourseInfo.module.css';

import Button from '../../common/Button/Button';
import { mockCourses } from '../../data/data';
import getCoursesDuration from '../../helpers/getCoursesDuration';
import getAuthorNames from '../../helpers/getAuthorNames';

const CourseInfo = () => {
  let { courseId } = useParams();
  let title;
  let description;
  let duration;
  let authors;
  let creationDate;
  mockCourses.forEach((element) => {
    if (courseId == element.id) {
      title = element.title;
      description = element.description;
      duration = element.duration;
      authors = element.authors;
      creationDate = element.creationDate;
    }
  });

  return (
    <div className={styles.courseInfoForm}>
      <div className={styles.backToCoursesLink}>
        <Link to={'/courses'}>
          <Button buttonText={' \u1438 Back to courses'} />
        </Link>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.formBody}>
        <div className={styles.description}>{description}</div>
        <div className={styles.coursesForm}>
          <div>
            <h1 className={styles.properties}>ID: </h1>
            {courseId}
          </div>
          <div>
            <h1 className={styles.properties}>Duration: </h1>
            {getCoursesDuration(duration)}
          </div>
          <div>
            <h1 className={styles.properties}>Created: </h1>
            {creationDate}
          </div>
          <div>
            <h1 className={styles.authorsProperties}>Authors: </h1>
            {authors.map((element, index) => {
              return <p key={index}>{getAuthorNames(element)}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
