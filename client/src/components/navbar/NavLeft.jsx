import { DarkModeContext } from "../../context/darkModeContext";
import Icon from "../customHTML/Icon.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { nav } from "./info";

const NavLeft = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const darkLightText = { color: darkMode ? "#fff" : "#000" };

  return (
    <div className={nav.left}>
      <span style={darkLightText}>TroopTalk</span>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Icon icon="home" />
      </Link>
      {darkMode ? <Icon icon="moon" onClick={toggle} /> : <Icon icon="sun" onClick={toggle} />}
      <Icon icon="grid" />
      <div className={nav.search}>
        <Icon icon="search" />
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default NavLeft;
