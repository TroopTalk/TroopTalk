const FriendsOnline = ({ img, alt, firstName, lastName }) => {
  return (
    <div className="RIGHT_BAR__user">
      <div className="RIGHT_BAR__userInfo">
        <img src={img} alt={alt} />
        <div className="RIGHT_BAR__online" />
        <span>
          {firstName} {lastName}
        </span>
      </div>
    </div>
  );
};
export default FriendsOnline;
