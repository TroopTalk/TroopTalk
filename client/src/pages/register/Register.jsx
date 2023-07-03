import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
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
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(inputs); // Check the inputs object
    const API = "http://localhost:3333/api/auth/register";
    try {
      await axios.post(API, inputs);
      navigate("/login");
    } catch (err) {
      const errorMessage = err.response.data.message;
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
            <input type="text" placeholder="First Name" name="firstName" value={inputs.firstName} onChange={handleChange} />
            <input type="text" placeholder="Last Name" name="lastName" value={inputs.lastName} onChange={handleChange} />
            <input type="text" placeholder="Service Branch" name="serviceBranch" value={inputs.serviceBranch} onChange={handleChange} />
            <input type="text" placeholder="Username" name="username" value={inputs.username} onChange={handleChange} />
            <input type="email" placeholder="Email" name="email" value={inputs.email} onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" value={inputs.password} onChange={handleChange} />
            {err && <div className="REGISTER__error">{err}</div>}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
