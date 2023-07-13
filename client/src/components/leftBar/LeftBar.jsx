import { LeftBarEnd, LeftBarMid, LeftBarTop } from "./leftBarSections.jsx/export";
import "./leftBar.scss";

const LeftBar = () => {
  return (
    <div className="LeftBar__">
      <div className="LeftBar__container">
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
