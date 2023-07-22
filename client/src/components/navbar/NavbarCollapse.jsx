import { DarkModeContext } from "../../context/darkModeContext.js";
import { Navbar as BootStrapNavbar } from "react-bootstrap";
import { Icon, IconLink } from "../customHTML/export.js";
import NavbarDropdown from "./NavbarDropdown.jsx";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { useContext } from "react";
import { nav } from "./info.js";

const NavbarCollapse = ({ onClick, children }) => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const navDark = darkMode ? "dark" : "light";

  return (
    <BootStrapNavbar.Collapse id="navbarScroll" className="collapsible">
      <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavbarDropdown />
      </Nav>
      <div className="item item-margin">{darkMode ? <Icon icon="moon" onClick={toggle} /> : <Icon icon="sun" onClick={toggle} />}</div>
      <Form className="d-flex">
        <Form.Control type="search" placeholder="Search" className={`me-2 bg-${navDark}`} aria-label="Search"></Form.Control>
      </Form>
      {children}
      <div className="item" onClick={onClick}>
        <IconLink className={nav.logout} icon="logout" />
      </div>
    </BootStrapNavbar.Collapse>
  );
};

export default NavbarCollapse;
