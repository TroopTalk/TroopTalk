import { firstName, lastName, email, username, password } from "./inputs";

const SignUp = ({ oncChange, value, err, onClick }) => {
  return (
    <form>
      <input {...firstName} onChange={oncChange} />
      <input {...lastName} onChange={oncChange} />
      <label htmlFor="serviceBranch">Branch of Service</label>
      <select value={value} name="serviceBranch" onChange={oncChange}>
        <option>Please Select</option>
        <option value="army">Army</option>
        <option value="airforce">Air Force</option>
        <option value="marines">Marines</option>
        <option value="navy">Navy</option>
        <option value="coastguard">Coast Guard</option>
      </select>
      <input {...username} onChange={oncChange} />
      <input {...email} onChange={oncChange} />
      <input {...password} onChange={oncChange} />
      {err && err}
      <button onClick={onClick}>Register</button>
    </form>
  );
};
export default SignUp;
