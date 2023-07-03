import User from "./user/User";

const Suggestions = ({ img, alt, name }) => {
  return (
    <div className="RIGHT_BAR__item">
      <span>Suggestions For You</span>
      <User img={img} alt={alt} name={name} />
    </div>
  );
};
export default Suggestions;
