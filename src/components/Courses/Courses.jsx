import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';

export default function Courses({ course }) {
	function showCreateCourse() {
		document.getElementById('courses').style.display = 'none';
		document.getElementById('createCoursePortal').style.display = 'block';
	}

	return (
		<div id='courses'>
			<div className='coursesBar'>
				<SearchBar></SearchBar>
				<Button buttonText='Add New Course' onClick={showCreateCourse}></Button>
			</div>

			{course?.map((course) => {
				return (
					<div style={({ border: '2px solid red' }, { margin: '5%' })}>
						<CourseCard key={course.id} course={course}></CourseCard>
					</div>
				);
			})}
		</div>
	);
}
