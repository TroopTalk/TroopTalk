import React from "react";
import LeftBarLinks from "../leftBarLinks/LeftBarLinks";
import { AuthContext } from "../../../../context/export";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";

const LeftBarTop = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser || typeof currentUser !== "object" || !currentUser.hasOwnProperty("token")) {
    console.error("Invalid currentUser:", currentUser);
    return null;
  }

  const { name, profilePic } = currentUser;

  return (
    <div className="LEFT_BAR__menu">
      <div className="LEFT_BAR__user">
        <Link to="#">
          {profilePic ? <img src={`/upload/${profilePic}`} alt={`${name}'s profile pic`} /> : <AccountCircle>{name ? name[0] : "U"}</AccountCircle>}
          <span>{name ? name : "User"}</span>
        </Link>
      </div>
      <LeftBarLinks />
    </div>
  );
};

export default LeftBarTop;
