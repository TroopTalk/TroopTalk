import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "./login.scss";
import LoginLeft from "./LoginLeft";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3333/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      if (response.ok) {
        login(inputs); // Call the login function from AuthContext
        setTimeout(() => {
          navigate("/");
        }, 100);
      } else {
        const errorData = await response.json();
        setErr(errorData.message);
      }
    } catch (err) {
      // console.error("Failed to login:", err);
      setErr("Failed to login");
    }
  };

  return (
    <div>
      <div className="LOGIN__">
        <div className="LOGIN__card">
          <LoginLeft />
          <div className="LOGIN__right">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" name="email" onChange={handleChange} />
              <input type="password" placeholder="Password" name="password" onChange={handleChange} />
              {err && <p>{err}</p>}
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
