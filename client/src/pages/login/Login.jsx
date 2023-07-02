import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "./login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "", // Updated field name to "email"
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
    console.log("handleLogin called");
    try {
      const response = await fetch("http://localhost:3333/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      if (response.ok) {
        console.log("Login successful");
        console.log("Navigating to /");
        login(inputs); // Call the login function from AuthContext
        navigate("/");
      } else {
        const errorData = await response.json();
        setErr(errorData.message);
      }
    } catch (err) {
      console.error("Failed to login:", err);
      setErr("Failed to login");
    }
  };

  return (
    <div className="LOGIN__">
      <div className="LOGIN__card">
        <div className="LOGIN__left">
          <h1>Troop Talk</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam ipsa exercitationem dignissimos, error nam, consequatur.</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="LOGIN__right">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Email" name="email" onChange={handleChange} /> {/* Updated field type and name */}
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            {err && <p>{err}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
