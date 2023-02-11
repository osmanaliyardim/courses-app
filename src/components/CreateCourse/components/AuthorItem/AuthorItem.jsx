import Button from '../../../../common/Button/Button';

export default function AuthorItem({ course }) {
	function AddAuthor() {}

	return (
		<>
			<h2> {course.authors} </h2>
			<Button buttonText='Add Author' onClick={AddAuthor}></Button>
		</>
	);
}
