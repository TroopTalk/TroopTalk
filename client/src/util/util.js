export const handleChange = (e, setter) => {
  const { name, value } = e.target;
  setter((prev) => ({ ...prev, [name]: value }));
  // console.log({ target: e.target.name, value: e.target.value }); // Used to ensure data is getting passed
  // to use in a input: onChange={(e) => handleChange(e, setInputs)}
};
