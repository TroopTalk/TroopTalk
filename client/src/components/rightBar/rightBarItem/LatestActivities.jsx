import LatestActivitiesUserInfo from "./userInfo/LatestActivitiesUserInfo";

const LatestActivities = ({ img, alt, person, update, time }) => {
  return (
    <div className="RIGHT_BAR__item">
      <span>Latest Activities</span>
      <LatestActivitiesUserInfo img={img} alt={alt} person={person} update={update} time={time} />
      <LatestActivitiesUserInfo img={img} alt={alt} person={person} update={update} time={time} />
    </div>
  );
};
export default LatestActivities;
