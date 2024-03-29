import LeftBarLinks from "../leftBarLinks/LeftBarLinks";
import { menuItems } from "./menuItems";

const LeftBarMid = () => {
  return (
    <div className="LeftBar__menu">
      <span>Your shortcuts</span>
      <div>
        <LeftBarLinks items={menuItems} />
      </div>
    </div>
  );
};

export default LeftBarMid;
