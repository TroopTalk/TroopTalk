export const handleChange = (e, setter) => {
  const { name, type, checked, value } = e.target;
  const inputValue = type === "checkbox" ? checked : value;

  setter((prev) => ({ ...prev, [name]: inputValue }));
  console.log({ target: name, value: inputValue }); // Used to ensure data is getting passed
  // to use in a input: onChange={(e) => handleChange(e, setInputs)}
};