import { firstNameProps, lastNameProps, emailProps, usernameProps, passProps, inputHook, armyCheckbox } from "./inputs";
import { airForceCheckbox, marinesCheckBox, navyCheckbox, coastguardCheckbox, spaceForceCheckbox } from "./inputs";
import { FormControlLabel, Checkbox, Button } from "../../components/mui/export";
import { InputMui } from "../../components/customHTML/mui/export";
import { useNavigate } from "react-router-dom";
import { handleChange } from "../../util/util";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [inputs, setInputs] = useState({ ...inputHook });
  const { firstName, lastName, username, email, password } = inputs;
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setInputs((prev) => ({
        ...prev,
        serviceBranch: [...prev.serviceBranch, value],
      }));
    } else {
      setInputs((prev) => ({
        ...prev,
        serviceBranch: prev.serviceBranch.filter((branch) => branch !== value),
      }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const API = process.env.REACT_APP_REGISTER_API;

    try {
      await axios.post(API, inputs);
      navigate("/login");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  const checkBoxProps = {
    onChange: handleCheckbox,
  };

  const inputProps = {
    onChange: (e) => handleChange(e, setInputs),
  };

  return (
    <form>
      <InputMui {...firstNameProps} value={firstName.value} {...inputProps} />
      <InputMui {...lastNameProps} value={lastName.value} {...inputProps} />
      <span>Branch of Service</span>
      <div className="select-container">
        <FormControlLabel control={<Checkbox {...checkBoxProps} {...armyCheckbox} />} label="Army" />
        <FormControlLabel control={<Checkbox {...checkBoxProps} {...airForceCheckbox} />} label="Air Force" />
        <FormControlLabel control={<Checkbox {...checkBoxProps} {...marinesCheckBox} />} label="Marines" />
        <FormControlLabel control={<Checkbox {...checkBoxProps} {...navyCheckbox} />} label="Navy" />
        <FormControlLabel control={<Checkbox {...checkBoxProps} {...coastguardCheckbox} />} label="Coast Guard" />
        <FormControlLabel control={<Checkbox {...checkBoxProps} {...spaceForceCheckbox} />} label="Space Force" />
      </div>
      <InputMui {...usernameProps} value={username.value} {...inputProps} />
      <InputMui {...emailProps} value={email.value} {...inputProps} />
      <InputMui {...passProps} value={password.value} {...inputProps} />
      {err && <p>{err.message}</p>}
      <Button onClick={handleClick}>Register</Button>
    </form>
  );
};

export default SignUp;
