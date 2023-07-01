import { default as LeftBarTop } from "./LeftBarTop.jsx";
import { default as LeftBarMid } from "./LeftBarMid.jsx";
import { default as LeftBarEnd } from "./LeftBarEnd.jsx";
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