import { handleChange } from "../../util/util";
import { firstNameProps, lastNameProps, emailProps, usernameProps, passProps, inputHook } from "./inputs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [inputs, setInputs] = useState({ ...inputHook });
  const { firstName, lastName, serviceBranch, username, email, password } = inputs;
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

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

  return (
    <form>
      <input {...firstNameProps} value={firstName.value} onChange={(e) => handleChange(e, setInputs)} />
      <input {...lastNameProps} value={lastName.value} onChange={(e) => handleChange(e, setInputs)} />
      <label htmlFor="serviceBranch">Branch of Service</label>
      <select value={serviceBranch.value} name="serviceBranch" onChange={(e) => handleChange(e, setInputs)}>
        <option>Please Select</option>
        <option value="army">Army</option>
        <option value="airforce">Air Force</option>
        <option value="marines">Marines</option>
        <option value="navy">Navy</option>
        <option value="coastguard">Coast Guard</option>
      </select>
      <input {...usernameProps} value={username.value} onChange={(e) => handleChange(e, setInputs)} />
      <input {...emailProps} value={email.value} onChange={(e) => handleChange(e, setInputs)} />
      <input {...passProps} value={password.value} onChange={(e) => handleChange(e, setInputs)} />
      {err && <p>{err.message}</p>}
      <button onClick={handleClick}>Register</button>
    </form>
  );
};

export default SignUp;
