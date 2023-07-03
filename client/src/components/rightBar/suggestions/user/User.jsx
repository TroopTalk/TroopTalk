const User = ({ img, alt, name }) => {
  return (
    <div className="RIGHT_BAR__user">
      <div className="RIGHT_BAR__userInfo">
        <img src={img} alt={alt} />
        <span>{name}</span>
      </div>
      <div className="RIGHT_BAR__buttons">
        <button>follow</button>
        <button>dismiss</button>
      </div>
    </div>
  );
};
export default User;
