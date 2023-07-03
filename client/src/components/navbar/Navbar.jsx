import { AuthContext, DarkModeContext } from "../../context/export.js";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../customHTML/Icon.jsx";
import { useContext } from "react";
import { nav } from "./info.js";
import "./navbar.scss";
import { NavLeft } from "./import.js";

const Navbar = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);
  const darkLight = { background: darkMode ? "#000" : "#fff" };

  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  if (!currentUser || typeof currentUser !== "object" || !currentUser.hasOwnProperty("token")) {
    console.error("Invalid currentUser:", currentUser);
    return null;
  }

  const UserImg = () => <img src={`/upload/${currentUser.profilePic}`} alt={`${currentUser.name}'s profile pic`} />;
  const DefaultImg = () => <Icon icon="acct">{currentUser?.name ? currentUser.name[0] : ""}</Icon>;
  const UserIcon = () => <div className={nav.user}>{currentUser?.profilePic ? <UserImg /> : <DefaultImg />}</div>;

  const NavRight = () => (
    <div className={nav.right}>
      <Link to={`/messages/${currentUser?.id}`}>
        <Icon icon="email" />
      </Link>
      <Icon icon="notif" />
      <UserIcon />
      <Link className={nav.logout} onClick={handleLogout}>
        <Icon icon="logout" />
      </Link>
    </div>
  );

  return (
    <div className={nav.nav} style={darkLight}>
      <NavLeft />
      <NavRight />
    </div>
  );
};

export default Navbar;
