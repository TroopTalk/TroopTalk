import { DarkModeContext } from "../../context/darkModeContext";
import Icon from "../customHTML/Icon.jsx";
import { Link } from "react-router-dom";
import { input, nav } from "./info";
import { useContext } from "react";

const NavLeft = () => {
  const { darkMode } = useContext(DarkModeContext);
  const darkLightText = { color: darkMode ? "#fff" : "#242526" };

  return (
    <div className={nav.left}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <span style={darkLightText}>TroopTalk</span>
      </Link>
      <Icon icon="grid" />
      <div className={nav.search}>
        <Icon icon="search" />
        <input {...input} style={darkLightText} />
      </div>
    </div>
  );
};

export default NavLeft;
