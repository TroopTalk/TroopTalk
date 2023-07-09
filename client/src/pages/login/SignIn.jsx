import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

const SignIn = ({ handleLogin, handleChange, err }) => {
  return (
    <div className="LOGIN__right">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input type="email" placeholder="Email" name="email" onChange={handleChange} />
        <Input type="password" placeholder="Password" name="password" onChange={handleChange} />
        {err && <p>{err}</p>}
        <Button variant="contained" type="submit">Share</Button>
      </form>
    </div>
  );
};
export default SignIn;
