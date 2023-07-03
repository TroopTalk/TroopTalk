import { Link } from "react-router-dom";
import React from "react";
import { menuItems } from "../leftBarEnd/menuItems";

const LeftBarLinks = () => {
  return (
    <div>
      {menuItems.map((item, index) => (
        <Link key={index} to={item.path}>
          {item.icon}
          <span>{item.title}</span>
        </Link>
      ))}
    </div>
  );
};
export default LeftBarLinks;
