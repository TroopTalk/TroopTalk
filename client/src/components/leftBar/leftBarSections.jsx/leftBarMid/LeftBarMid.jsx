import LeftBarLinks from "../leftBarLinks/LeftBarLinks";
import { menuItems } from "./menuItems";

const LeftBarMid = () => {
  return (
    <div className="LEFT_BAR__menu">
      <span>Your shortcuts</span>
      <div>
        <LeftBarLinks items={menuItems} />
      </div>
    </div>
  );
};

export default LeftBarMid;
