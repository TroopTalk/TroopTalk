import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./register.scss";

const Register = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const API = process.env.REACT_APP_REGISTER_API;
    try {
      await axios.post(API, inputs);
      navigate("/login");
    } catch (err) {
      const errorMessage = err.response.data.sqlMessage; // or whatever field contains the error message
      setErr(errorMessage);
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
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="email" placeholder="Email" name="email" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            <input type="text" placeholder="Name" name="name" onChange={handleChange} />
            {err && <div className="REGISTER__error">{err}</div>}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
