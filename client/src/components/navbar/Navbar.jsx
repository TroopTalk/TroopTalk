// import { AuthContext, DarkModeContext } from "../../context/export.js";
// import { NavLayout, NavLeft, NavbarRightLayout } from "./import.js";
// import { Icon, IconLink } from "../customHTML/export.js";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { nav } from "./info.js";
// import "./navbar.scss";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { toggle, darkMode } = useContext(DarkModeContext);
//   const darkLight = { background: darkMode ? "#242526" : "#fff" };

//   const { currentUser, logout } = useContext(AuthContext);

// const handleLogout = async () => {
//   try {
//     await logout();
//     navigate("/login");
//   } catch (error) {
//     console.log(error);
//   }
// };

//   if (!currentUser || typeof currentUser !== "object" || !currentUser.hasOwnProperty("token")) {
//     console.error("Invalid currentUser:", currentUser);
//     return null;
//   }

//   const UserImg = () => <img src={`/upload/${currentUser.profilePic}`} alt={`${currentUser.name}'s profile pic`} />;
//   const DefaultImg = () => <IconLink icon="acct" to={`/profile/${currentUser.id}`} />;
//   const UserIcon = () => <div className={`${nav.user} item`}>{currentUser?.profilePic ? <UserImg /> : <DefaultImg />}</div>;

//   const NavRight = () => (
//     <div className={nav.right}>
//       <div className="item">{darkMode ? <Icon icon="moon" onClick={toggle} /> : <Icon icon="sun" onClick={toggle} />}</div>
//       <NavbarRightLayout to={`/messages/${currentUser?.id}`} icon="email" />
//       <NavbarRightLayout to={`/notifications/${currentUser?.id}`} icon="notif" />
//       <div className="item">
//         <UserIcon />
//       </div>
// <div className="item" onClick={handleLogout}>
//   <IconLink className={nav.logout} icon="logout" />
// </div>
//     </div>
//   );

//   return <NavLayout className={nav.nav} left={<NavLeft />} right={<NavRight />} style={darkLight} />;
// };

// export default Navbar;

import { AuthContext, DarkModeContext } from "../../context/export.js";
import { Navbar as BootStrapNavbar } from "react-bootstrap";
import { IconLink } from "../customHTML/export.js";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { NavbarCollapse } from "./import.js";
import { useContext } from "react";
import { nav } from "./info.js";
import "./navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  // const darkLight = { background: darkMode ? "#242526" : "#fff" };
  const navDark = darkMode ? "dark" : "light";

  const UserImg = () => <img src={`/upload/${currentUser.profilePic}`} alt={`${currentUser.name}'s profile pic`} />;
  const DefaultImg = () => <IconLink icon="acct" to={`/profile/${currentUser.id}`} />;
  const UserIcon = () => <div className={`${nav.user} item`}>{currentUser?.profilePic ? <UserImg /> : <DefaultImg />}</div>;

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <BootStrapNavbar expand="lg" className={`bg navbar navbar-${navDark} bg-${navDark}`} bg={navDark}>
      <Container fluid className={`text-${navDark} bg-${navDark} `}>
        <BootStrapNavbar.Brand href="#">TroopTalk</BootStrapNavbar.Brand>
        <BootStrapNavbar.Toggle aria-controls="navbarScroll" />
        <NavbarCollapse onClick={handleLogout} children={<UserIcon />} />
      </Container>
    </BootStrapNavbar>
  );
};

export default Navbar;

// ! ignore, just some code i made to calculate stuff in a game - Andrew

// const calculateTimeToNextWeight = (currentLiftPerSecond, nextWeightPrice) => {
//   const timeInSeconds = nextWeightPrice / 2 / currentLiftPerSecond;
//   const days = Math.floor(timeInSeconds / (3600 * 24));
//   const hours = Math.floor((timeInSeconds % (3600 * 24)) / 3600);
//   const minutes = Math.floor((timeInSeconds % 3600) / 60);
//   const seconds = Math.floor(timeInSeconds % 60);

//   return `Time to reach the next weight: ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
// };

// // Example usage , use https://officespace.zendesk.com/hc/en-us/articles/115000593531-Scientific-Notation-Large-Numbers-Guide
// const currentLiftPerSecond = 5.532e48; // The amount lifted per second
// const nextWeightPrice = (9.99e54 - 0.188e54) / 2; // The price of the next weight in exponential notation

// console.log(calculateTimeToNextWeight(currentLiftPerSecond, nextWeightPrice));
