import { courses, fund, tutorials } from "../../assets/img";
import { Link } from "react-router-dom";

const LeftBarEnd = () => {
  const menuItems = [
    {
      icon: fund,
      label: "Fundraiser",
      path: "#",
    },
    {
      icon: tutorials,
      label: "Tutorials",
      path: "#",
    },
    {
      icon: courses,
      label: "Courses",
      path: "#",
    },
  ];

  return (
    <div className="LEFT_BAR__menu">
      <span>Others</span>
      {menuItems.map((item) => (
        <Link to={item.path}>
          <div className="LEFT_BAR__item" key={item.label}>
            <img src={item.icon} alt={`${item.label} icon`} />
            <span>{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LeftBarEnd;
