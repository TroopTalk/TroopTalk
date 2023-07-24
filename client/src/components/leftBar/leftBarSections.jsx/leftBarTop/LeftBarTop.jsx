import React from "react";
import LeftBarLinks from "../leftBarLinks/LeftBarLinks";
import { AuthContext } from "../../../../context/export";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { menuItems } from "../leftBarEnd/menuItems";

const LeftBarTop = () => {
  const { currentUser } = useContext(AuthContext);

  if (
    !currentUser ||
    typeof currentUser !== "object" ||
    !currentUser.hasOwnProperty("token")
  ) {
    console.error("Invalid currentUser:", currentUser);
    return null;
  }

  const { user, profilePic } = currentUser;

  return (
    <div className="LeftBar__menu">
      <div className="LeftBar__user">
        <Link to="#">
          {profilePic ? (
            <img
              src={`/upload/${profilePic}`}
              alt={`${user.username}'s profile pic`}
            />
          ) : (
            <AccountCircle>{user.username ? user.username : "U"}</AccountCircle>
          )}
          <span>{user.username ? user.username : "User"}</span>
        </Link>
      </div>
      <LeftBarLinks items={menuItems} />
    </div>
  );
};

export default LeftBarTop;
