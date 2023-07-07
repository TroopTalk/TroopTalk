import User from "./user/User";

const Suggestions = ({ img, alt, name }) => {
  const suggestions = {
    img: img,
    alt: alt,
    name: name,
  };

  return (
    <div className="RIGHT_BAR__item">
      <span>Suggestions For You</span>
      <User {...suggestions} />
    </div>
  );
};
export default Suggestions;
