import { useState } from 'react';
import Input from '../../../../common/Input/Input';

export default function SearchBar({ course, setCourse }) {
	const searchInfo = 'Search Courses..';
	const [input, setInput] = useState({});

	const handleChange = (event) => {
		event.preventDefault();
		const name = event.target.name;
		const value = event.target.value;
		setInput((values) => ({ values, [name]: value }));

		// ToDo: Add searching logic
		const searchResult = [...course, input];
		setCourse(searchResult);
	};

	return <Input placeholderText={searchInfo} onChange={handleChange}></Input>;
}
