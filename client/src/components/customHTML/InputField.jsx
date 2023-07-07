const InputField = ({ label, placeholder, value, name, type, handleChange }) => {
  const input = {
    type: type,
    placeholder: placeholder,
    value: value,
    name: name,
    onChange: handleChange,
  };

  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};

export default InputField;
