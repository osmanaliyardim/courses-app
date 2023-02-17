import Input from '../../../../common/Input/Input';

const SearchBar = ({ onClick, onChange, value }) => {
  const searchInfo = 'Search Courses..';

  return (
    <Input
      placeholderText={searchInfo}
      value={value}
      onClick={onClick}
      onChange={onChange}
    ></Input>
  );
};

export default SearchBar;
