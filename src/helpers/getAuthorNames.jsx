//ToDo: will be fixed
//import { useSelector } from 'react-redux';

//const getAuthorNames = (authorParams) => {
//   const authors = useSelector((state) => state.courses.authors);
//   const authorNames = [];

//   authorParams.forEach((paramElement) => {
//     authors.forEach((author) => {
//       if (paramElement === author.id) {
//         authorNames.push(author.name);
//       }
//     });
//   });

//   return authorNames;
// };

//Mock
const getAuthorNames = (authorParams) => {
  const authorNames = [];

  authorNames.push('osmanaliyardim');

  return authorNames;
};

export default getAuthorNames;
