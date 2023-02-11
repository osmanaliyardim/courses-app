import BootstrapButton from 'react-bootstrap/Button';
import formatCreationDate from '../../../../helpers/formatCreationDate';

export default function CourseCard(props) {
	const course = props.course;
	const fixedDuration = formatCreationDate(course.duration);

	return (
		<div className='courseCard'>
			<h2>{course.title}</h2>
			<h4>{course.description}</h4>
			<h3>
				<b>Authors:</b> {course.authors}
			</h3>
			<h3>
				<b>Duration:</b> {fixedDuration}
			</h3>
			<h3>
				<b>Created:</b> {course.creationDate}
			</h3>
			<BootstrapButton variant='info' type='submit'>
				Show course
			</BootstrapButton>
		</div>
	);
}
