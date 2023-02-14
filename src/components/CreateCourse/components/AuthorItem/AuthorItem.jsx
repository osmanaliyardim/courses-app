import Button from '../../../../common/Button/Button';

const AuthorItem = ({ author, onClick }) => {
  return (
    <>
      <p>{author.name}</p>
      <Button buttonText='Add author' onClick={onClick}></Button>
    </>
  );
};

export default AuthorItem;
