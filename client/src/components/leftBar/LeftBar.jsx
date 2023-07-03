import { LeftBarEnd, LeftBarMid, LeftBarTop } from "./leftBarSections.jsx/export";
import "./leftBar.scss";

const LeftBar = () => {
  return (
    <div className="LEFT_BAR__">
      <div className="LEFT_BAR__container">
        <LeftBarTop />
        <hr />
        <LeftBarMid />
        <hr />
        <LeftBarEnd />
      </div>
    </div>
  );
};

export default LeftBar;
