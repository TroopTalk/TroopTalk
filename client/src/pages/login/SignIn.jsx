const SignIn = ({ handleLogin, handleChange, err }) => {
  return (
    <div className="LOGIN__right">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" name="email" onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" onChange={handleChange} />
        {err && <p>{err}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default SignIn;
