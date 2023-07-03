import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./register.scss";
import InputField from "../../components/customHTML/InputField";

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
            <InputField placeholder="First Name" value={inputs.firstName} name="firstName" type="text" handleChange={handleChange} />
            <InputField placeholder="Last Name" value={inputs.lastName} name="lastName" type="text" handleChange={handleChange} />
            <InputField placeholder="Service Branch" value={inputs.serviceBranch} name="serviceBranch" type="text" handleChange={handleChange} />
            <InputField placeholder="Username" value={inputs.username} name="username" type="text" handleChange={handleChange} />
            <InputField placeholder="Email" value={inputs.email} name="email" type="email" handleChange={handleChange} />
            <InputField placeholder="Password" value={inputs.password} name="password" type="password" handleChange={handleChange} />
            {err && <div className="REGISTER__error">{err}</div>}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
