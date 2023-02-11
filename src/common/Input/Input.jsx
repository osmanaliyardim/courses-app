export default function Input({ labelText, placeholderText, onChange }) {
	<label>{labelText}</label>;
	return <input placeholder={placeholderText} onChange={onChange} />;
}
