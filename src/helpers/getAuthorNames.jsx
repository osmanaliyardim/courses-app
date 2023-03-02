import { useSelector } from 'react-redux';

const GetAuthorNames = (authorParams) => {
  const authors = useSelector((state) => state.courses.authors);
  const authorNames = [];

  authorParams.forEach((paramElement) => {
    authors.forEach((author) => {
      if (paramElement === author.id) {
        authorNames.push(author.name);
      }
    });
  });

  return authorNames;
};

export default GetAuthorNames;
