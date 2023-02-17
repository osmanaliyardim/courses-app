import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import styles from '../CreateCourse/CreateCourse.module.css';
import AuthorItem from './components/AuthorItem/AuthorItem';
import formatCreationDate from '../../helpers/formatCreationDate';
import createGuid from '../../helpers/createGuid';

const CreateCourse = ({ course, setCourses, author, setAuthor }) => {
  let [inputs, setInputs] = useState({});
  let [authorInput, setAuthorInput] = useState('');
  let [formAuthors, setFormAuthors] = useState([]);

  let authorId = createGuid();
  let courseId = createGuid();

  const addAuthorToForm = (authorName, event) => {
    event.stopPropagation();
    if (formAuthors.includes(authorName)) return;

    setFormAuthors([...formAuthors, authorName]);
  };

  const deleteAuthor = (authorName) => {
    setFormAuthors(formAuthors.filter((author) => author !== authorName));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleAuthorChange = (event) => {
    setAuthorInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCourses = [
      ...course,
      {
        id: courseId,
        creationDate: formatCreationDate(),
        authors: formAuthors,
        ...inputs,
      },
    ];
    setCourses(newCourses);

    setInputs({});
  };

  const createAuthor = () => {
    const shouldReturn = (element) => {
      return element.name === authorInput;
    };

    author.some(shouldReturn);

    if (authorInput)
      setAuthor(author.push({ id: authorId, name: authorInput }));

    setAuthorInput('');
  };

  const showCourses = () => {
    document.getElementById('courses').style.display = 'block';
    document.getElementById('createCoursePortal').style.display = 'none';
  };

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
      <div className={styles.addAuthorPortal}>
        <div className={styles.addAuthorPortalLeft}>
          <Input
            labelText='Author name'
            placeholderText='Enter author name..'
            name='author'
            value={authorInput}
            onChange={handleAuthorChange}
          />
          <Button buttonText='Create author' onClick={createAuthor} />
        </div>
        <div className={styles.authors}>
          {author?.length
            ? author.map((author) => {
                return (
                  <div key={author.id} className={styles.addAuthorPortalRight}>
                    <AuthorItem
                      author={author}
                      onClick={(event) => addAuthorToForm(author.name, event)}
                      clickToDelete={() => deleteAuthor(author.name)}
                    />
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <Button buttonText='+ Add Course' onClick={showCourses}></Button>
    </Form>
  );
};

export default CreateCourse;
