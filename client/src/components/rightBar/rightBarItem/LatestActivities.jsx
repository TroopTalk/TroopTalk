import LatestActivitiesUserInfo from "./userInfo/LatestActivitiesUserInfo";

const LatestActivities = ({ img, alt, person, update, time }) => {
  const latestActivities = {
    img: img,
    alt: alt,
    person: person,
    update: update,
    time: time,
  };

  return (
    <div className="RIGHT_BAR__item">
      <span>Latest Activities</span>
      <LatestActivitiesUserInfo {...latestActivities} />
      <LatestActivitiesUserInfo {...latestActivities} />
    </div>
  );
};
export default LatestActivities;
