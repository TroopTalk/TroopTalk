import LeftBarLinks from "../leftBarLinks/LeftBarLinks";
import { menuItems } from "./menuItems";

const LeftBarMid = () => {
  return (
    <div className="LEFT_BAR__menu">
      <span>Your shortcuts</span>
      <LeftBarLinks menuItems={menuItems} />
    </div>
  );
};

export default LeftBarMid;
