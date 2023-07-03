import LeftBarLinks from "../leftBarLinks/LeftBarLinks.jsx";
import { AuthContext } from "../../../../context/export.js";
import { AccountCircle } from "@mui/icons-material";
import { menuItems } from "./menuItems.js";
import { Link } from "react-router-dom";
import { useContext } from "react";

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
      <LeftBarLinks menuItems={menuItems} />
    </div>
  );
};

export default LeftBarTop;
