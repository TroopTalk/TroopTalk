import { Link } from "react-router-dom";

const LoginLeft = () => {
  return (
    <div className="LOGIN__left">
      <h1>Troop Talk</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam ipsa exercitationem dignissimos, error nam, consequatur.</p>
      <span>Don't you have an account?</span>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};
export default LoginLeft;
