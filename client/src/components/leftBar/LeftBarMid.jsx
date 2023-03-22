import { events, gaming, gallery, videos } from "../../assets/img";
import { Link } from "react-router-dom";

const LeftBarMid = () => {
  const menuItems = [
    {
      icon: events,
      label: "Events",
      path: "/events",
    },
    {
      icon: gaming,
      label: "Gaming",
      path: "/gaming",
    },
    {
      icon: gallery,
      label: "Gallery",
      path: "/gallery",
    },
    {
      icon: videos,
      label: "Videos",
      path: "/videos",
    },
  ];

  return (
    <div className="LEFT_BAR__menu">
      <span>Your shortcuts</span>
      {menuItems.map((item) => (
        <div className="LEFT_BAR__item" key={item.label}>
          <Link to={item.path}>
            <img src={item.icon} alt={`${item.label} icon`} />
            <span>{item.label}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LeftBarMid;