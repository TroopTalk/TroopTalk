import { OnlineFriends, LatestActivities, Suggestions } from "./import.js";
import { suggestions, update } from "./dummyData.js";
import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="RIGHT_BAR__">
      <div className="RIGHT_BAR__container">
        <Suggestions {...suggestions} />
        <LatestActivities {...update} />
        <OnlineFriends />
      </div>
    </div>
  );
};

export default RightBar;
