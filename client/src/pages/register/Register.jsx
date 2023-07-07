import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SignUp from "./Signup";
import axios from "axios";
import "./register.scss";

const Register = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    serviceBranch: "",
    username: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.U]: e.target.value }));
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

  return (
    <div className="REGISTER__">
      <div className="REGISTER__card">
        <div className="REGISTER__left">
          <h1>Troop Talk</h1>
          <p>Welcome to TroopTalk, a place for veterans to come together and socialize with each other!</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="REGISTER__right">
          <h1>Register</h1>
          {/* Keep until registration is tested */}
          {/* <form>
            <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} />
            <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} />
            <label htmlFor="serviceBranch">Branch of Service</label>
            <select value={inputs.serviceBranch} name="serviceBranch" onChange={handleChange}>
              <option>Please Select</option>
              <option value="army">Army</option>
              <option value="airforce">Air Force</option>
              <option value="marines">Marines</option>
              <option value="navy">Navy</option>
              <option value="coastguard">Coast Guard</option>
            </select>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="email" placeholder="Email" name="email" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form> */}
          <SignUp onChange={handleChange} value={inputs.serviceBranch} err={err} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Register;
