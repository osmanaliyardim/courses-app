import Button from '../../../../common/Button/Button';

const AuthorItem = ({ author, onClick, clickToDelete }) => {
  return (
    <>
      <p>{author.name}</p>
      <Button buttonText='Add author' onClick={onClick}></Button>
      <Button buttonText='X' clickToDelete={clickToDelete}></Button>
    </>
  );
};

export default AuthorItem;
