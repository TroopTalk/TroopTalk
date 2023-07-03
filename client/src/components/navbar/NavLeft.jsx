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
      <Link to="/" style={{ textDecoration: "none" }}>
        <span style={darkLightText}>TroopTalk</span>
      </Link>
      <Icon icon="grid" />
      <div className={nav.search}>
        <Icon icon="search" />
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default NavLeft;
