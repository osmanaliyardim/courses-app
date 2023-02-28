import { mockAuthors } from '../data/data';

const getAuthorNames = (authors) => {
  const authorNames = [];

  mockAuthors.map((element) => {
    if (authors.includes(element.id)) {
      authorNames.push(element.name);
    }
  });

  return authorNames;
};

export default getAuthorNames;
