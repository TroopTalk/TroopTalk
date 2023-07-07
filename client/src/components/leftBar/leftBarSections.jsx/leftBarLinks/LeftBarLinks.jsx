import { Link } from "react-router-dom";
import React from "react";

const LeftBarLinks = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Link key={index} to={item.path}>
          <img src={item.icon} alt={item.label} />
          <span className="LeftBarLinks">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default LeftBarLinks;
