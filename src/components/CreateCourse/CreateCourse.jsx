import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import styles from '../CreateCourse/CreateCourse.module.css';
import AuthorItem from './components/AuthorItem/AuthorItem';
import formatCreationDate from '../../helpers/formatCreationDate';

const CreateCourse = ({ course, setCourse, author }) => {
  let [inputs, setInputs] = useState({});
  let [authorInput, setAuthorInput] = useState('');
  let [formAuthors, setFormAuthors] = useState([]);
  let authorId = Math.random();
  let courseId = Math.random();

  function addAuthorToForm(authorName, event) {
    event.stopPropagation();
    console.log(authorName);
    console.log(formAuthors);
    if (formAuthors.includes(authorName)) return;

    setFormAuthors([...formAuthors, authorName]);
  }

  function deleteAuthor(authorName) {
    setFormAuthors(formAuthors.filter((author) => author !== authorName));
  }

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
    setCourse(newCourses);

    setInputs({});
  };

  const createAuthor = () => {
    let shouldReturn = false;
    author.forEach((element) => {
      if (element.name === authorInput) {
        shouldReturn = true;
        return;
      }
    });
    if (shouldReturn) return;

    if (authorInput) author.push({ id: authorId, name: authorInput });

    setAuthorInput('');
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
