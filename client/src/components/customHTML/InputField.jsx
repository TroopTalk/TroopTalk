const InputField = ({ label, placeholder, value, name, type, handleChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} value={value} name={name} onChange={handleChange} />
    </div>
  );
};

export default InputField;
