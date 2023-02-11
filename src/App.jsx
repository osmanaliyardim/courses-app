import React, { useEffect } from 'react';
import Courses from '../src/components/Courses/Courses';
import Header from './components/Header/Header';
import { mockCourses } from './data/data';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	const [course, setCourse] = React.useState();
	useEffect(() => {
		setCourse(mockCourses);
	}, []);

	return (
		<>
			<Header className='mb-3'></Header>
			<Courses course={course} className='mb-3' />

			<CreateCourse
				course={course}
				setCourse={setCourse}
				className='mt-3'
			></CreateCourse>
		</>
	);
}

export default App;
