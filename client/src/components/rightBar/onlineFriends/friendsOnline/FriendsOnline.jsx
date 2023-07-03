const FriendsOnline = ({ img, alt, name }) => {
  return (
    <div className="RIGHT_BAR__user">
      <div className="RIGHT_BAR__userInfo">
        <img src={img} alt={alt} />
        <div className="RIGHT_BAR__online" />
        <span>{name}</span>
      </div>
    </div>
  );
};
export default FriendsOnline;
