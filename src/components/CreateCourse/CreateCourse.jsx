import { useState, ReactDOM } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '../../common/Button/Button';

export default function CreateCourse({ course, setCourse }) {
	let [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newCourses = [...course, inputs];
		setCourse(newCourses);
		ReactDOM.findDOMNode(this.refs.title).value = '';
	};

	function showCourses(event) {
		document.getElementById('courses').style.display = 'block';
		document.getElementById('createCoursePortal').style.display = 'none';
	}

	return (
		<Form
			onSubmit={handleSubmit}
			id='createCoursePortal'
			style={{ display: 'none' }}
		>
			<Form.Group className='mb-3' controlId='formBasicTitle'>
				<Form.Label>Title:</Form.Label>
				<Form.Control
					type='text'
					name='title'
					value={inputs.title || ''}
					onChange={handleChange}
				/>
				<Form.Text className='text-muted'>
					Course title must be provided.
				</Form.Text>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicDescription'>
				<Form.Label>Description:</Form.Label>
				<Form.Control
					type='text'
					name='description'
					value={inputs.description || ''}
					onChange={handleChange}
				/>
				<Form.Text className='text-info'>
					Course description must be provided.
				</Form.Text>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicDuration'>
				<Form.Label>Duration:</Form.Label>
				<Form.Control
					type='text'
					name='duration'
					value={inputs.duration || ''}
					onChange={handleChange}
				/>
				<Form.Text className='text-warning'>
					Course duration must be provided.
				</Form.Text>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicAuthors'>
				<Form.Label>Authors:</Form.Label>
				<Form.Control
					type='text'
					name='authors'
					value={inputs.authors || ''}
					onChange={handleChange}
				/>
				<Form.Text className='text-danger'>
					Course authors must be provided.
				</Form.Text>
			</Form.Group>
			<Button buttonText='+ Add Course' onClick={showCourses}></Button>
		</Form>
	);
}
