import { friends, groups, market, memories, watch } from "../../assets/img";
import { AuthContext } from "../../context/export.js";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";

const menuItems = [
  {
    icon: friends,
    label: "Friends",
    path: "/friends",
  },
  {
    icon: groups,
    label: "Groups",
    path: "/groups",
  },
  {
    icon: market,
    label: "Marketplace",
    path: "/marketplace",
  },
  {
    icon: watch,
    label: "Watch",
    path: "/watch",
  },
  {
    icon: memories,
    label: "Memories",
    path: "/memories",
  },
];

const LeftBarTop = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser || typeof currentUser !== "object" || !currentUser.hasOwnProperty("name")) {
    console.error("Invalid currentUser:", currentUser);
    return null;
  }

  return (
    <div className="LEFT_BAR__menu">
      <div className="LEFT_BAR__user">
        <Link to="#">
          {currentUser.profilePic ? <img src={`/upload/${currentUser.profilePic}`} alt={`${currentUser.name}'s profile pic`} /> : <AccountCircle>{currentUser.name[0]}</AccountCircle>}
          <span>{currentUser.name}</span>
        </Link>
      </div>
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

export default LeftBarTop;
