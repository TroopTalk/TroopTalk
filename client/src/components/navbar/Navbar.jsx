import { AuthContext, DarkModeContext } from "../../context/export.js";
import { NavLayout, NavLeft, NavbarRightLayout } from "./import.js";
import { Icon, IconLink } from "../customHTML/export.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { nav } from "./info.js";
import "./navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const { toggle, darkMode } = useContext(DarkModeContext);
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
  const DefaultImg = () => <IconLink icon="acct" to={`/profile/${currentUser.id}`} />;
  const UserIcon = () => <div className={`${nav.user} item`}>{currentUser?.profilePic ? <UserImg /> : <DefaultImg />}</div>;

  const NavRight = () => (
    <div className={nav.right}>
      <div className="item">{darkMode ? <Icon icon="moon" onClick={toggle} /> : <Icon icon="sun" onClick={toggle} />}</div>
      <NavbarRightLayout to={`/messages/${currentUser?.id}`} icon="email" />
      <NavbarRightLayout to={`/notifications/${currentUser?.id}`} icon="notif" />
      <div className="item">
        <UserIcon />
      </div>
      <div className="item" onClick={handleLogout}>
        <IconLink className={nav.logout} icon="logout" />
      </div>
    </div>
  );

  return <NavLayout className={nav.nav} left={<NavLeft />} right={<NavRight />} style={darkLight} />;
};

export default Navbar;
