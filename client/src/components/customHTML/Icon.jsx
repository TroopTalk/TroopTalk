import { HomeOutlinedIcon, DarkModeOutlinedIcon, WbSunnyOutlinedIcon, GridViewOutlinedIcon, NotificationsOutlinedIcon, EmailOutlinedIcon, PersonOutlinedIcon, SearchOutlinedIcon, Logout } from "./img";
import { DarkModeContext } from "../../context/darkModeContext";
import { AccountCircle } from "@mui/icons-material";
import { useContext } from "react";

const Icon = ({ icon, onClick }) => {
  const { darkMode } = useContext(DarkModeContext);
  const darkLight = { color: darkMode ? "#fff" : "#000" };

  const iconComponents = {
    moon: DarkModeOutlinedIcon,
    sun: WbSunnyOutlinedIcon,
    grid: GridViewOutlinedIcon,
    notif: NotificationsOutlinedIcon,
    email: EmailOutlinedIcon,
    search: SearchOutlinedIcon,
    logout: Logout,
    home: HomeOutlinedIcon,
    person: PersonOutlinedIcon,
    acct: AccountCircle,
  };

  const IconComponent = iconComponents[icon];

  return <IconComponent style={darkLight} onClick={onClick} />;
};

export default Icon;
