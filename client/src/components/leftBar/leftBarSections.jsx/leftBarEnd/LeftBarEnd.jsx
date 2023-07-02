import LeftBarLinks from "../leftBarLinks/LeftBarLinks";
import { menuItems } from "./menuItems";

const LeftBarEnd = () => {
  return (
    <div className="LEFT_BAR__menu">
      <span>Others</span>
      <LeftBarLinks menuItems={menuItems} />
    </div>
  );
};

export default LeftBarEnd;
