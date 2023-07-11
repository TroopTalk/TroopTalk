import Button from "../../components/customHTML/mui/button/Button";
import { InputMui } from "../../components/customHTML/mui/export";

const SignIn = ({ handleLogin, handleChange, err }) => {
  return (
    <div className="LOGIN__right">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <InputMui type="email" name="email" label="Email" onChange={handleChange} />
        <InputMui type="password" name="password" label="Password" onChange={handleChange} />
        {err && <p>{err}</p>}
        <Button variant="contained" type="submit" text="Share" />
      </form>
    </div>
  );
};
export default SignIn;
