import { Link } from "react-router-dom";
import * as React from "react";
import SignUp from "./Signup";
import "./register.scss";

const Register = () => {
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
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Register;
