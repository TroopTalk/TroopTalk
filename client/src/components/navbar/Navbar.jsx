import { DarkModeOutlinedIcon, WbSunnyOutlinedIcon, GridViewOutlinedIcon, NotificationsOutlinedIcon, EmailOutlinedIcon, SearchOutlinedIcon, Logout, HomeOutlinedIcon } from "./img.js";
import { AuthContext, DarkModeContext } from "../../context/export.js";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import { useContext } from "react";
import "./navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const { toggle, darkMode } = useContext(DarkModeContext);
  // const { currentUser, logout } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const darkLight = { color: darkMode ? "#fff" : "#000" };

  // if (!currentUser || typeof currentUser !== "object" || !currentUser.hasOwnProperty("name")) {
  //   console.error("Invalid currentUser:", currentUser);
  //   return null;
  // }

  return (
    <div className="NAVBAR__">
      <div className="NAVBAR__left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>TroopTalk</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? <WbSunnyOutlinedIcon onClick={toggle} /> : <DarkModeOutlinedIcon onClick={toggle} />}
        <GridViewOutlinedIcon />

        <div className="NAVBAR__search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="NAVBAR__right">
        {/* <NavLink to={`/messages/${currentUser.id}`}>
          <EmailOutlinedIcon style={darkLight} />
        </NavLink> */}
        <NotificationsOutlinedIcon />
        {/* <div className="NAVBAR__user">{currentUser.profilePic ? <img src={`/upload/${currentUser.profilePic}`} alt={`${currentUser.name}'s profile pic`} /> : <AccountCircle>{currentUser.name[0]}</AccountCircle>}</div> */}
        <NavLink className="NAVBAR__logout" onClick={handleLogout}>
          <Logout style={darkLight} />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
