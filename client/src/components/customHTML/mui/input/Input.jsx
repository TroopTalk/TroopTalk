import { TextField } from "../../../mui/export";

const InputMui = ({ type, name, value, label, onChange }) => {
  return <TextField type={type} name={name} value={value} label={label} variant="outlined" onChange={onChange} />;
};

export default InputMui;
