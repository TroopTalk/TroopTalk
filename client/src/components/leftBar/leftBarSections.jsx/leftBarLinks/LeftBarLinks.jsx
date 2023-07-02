import { Link } from "react-router-dom";
import React from "react";

const LeftBarLinks = ({ menuItems }) => {
  return (
    <React.Fragment>
      {menuItems.map((item) => (
        <Link to={item.path}>
          <div className="LEFT_BAR__item" key={item.label}>
            <img src={item.icon} alt={`${item.label} icon`} />
            <span>{item.label}</span>
          </div>
        </Link>
      ))}
    </React.Fragment>
  );
};
export default LeftBarLinks;
