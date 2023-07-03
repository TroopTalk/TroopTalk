const LatestActivitiesUserInfo = ({ img, alt, person, update, time }) => {
  return (
    <div className="RIGHT_BAR__user">
      <div className="RIGHT_BAR__userInfo">
        <img src={img} alt={alt} />
        <p>
          <span>{person}</span> {update}
        </p>
      </div>
      <span>{time}</span>
    </div>
  );
};
export default LatestActivitiesUserInfo;
