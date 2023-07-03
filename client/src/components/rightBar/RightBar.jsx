import { OnlineFriends, LatestActivities, Suggestions } from "./import.js";
import "./rightBar.scss";

const RightBar = () => {
  const img = "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600";

  return (
    <div className="RIGHT_BAR__">
      <div className="RIGHT_BAR__container">
        <Suggestions img={img} alt={"user"} name={"Someone"} />
        <LatestActivities img={img} alt="user" person="Jane Doe" update="changed their profile picture" time="1 min ago" />
        <OnlineFriends />
      </div>
    </div>
  );
};

export default RightBar;
