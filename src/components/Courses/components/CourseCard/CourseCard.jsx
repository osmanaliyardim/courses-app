import BootstrapButton from 'react-bootstrap/Button';
import getCoursesDuration from '../../../../helpers/getCoursesDuration';

const CourseCard = ({ course, author }) => {
  const fixedDuration = getCoursesDuration(course.duration);

  const courseAuthorNames = course?.length
    ? course?.authors?.map((course) => {
        const authorNames = author
          .filter((author) => course.includes(author.id))
          .map((author) => author.name);
        return authorNames.join(', ');
      })
    : null;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p>
        <b>Authors:</b> {courseAuthorNames}
      </p>
      <p>
        <b>Duration:</b> {fixedDuration}
      </p>
      <p>
        <b>Created:</b> {course.creationDate}
      </p>
      <BootstrapButton variant='info' type='submit'>
        Show course
      </BootstrapButton>
    </div>
  );
};

export default CourseCard;
