const Input = ({ name, value, labelText, placeholderText, onChange }) => {
  return (
    <>
      <label>{labelText}</label>
      <input
        name={name}
        value={value}
        placeholder={placeholderText}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
