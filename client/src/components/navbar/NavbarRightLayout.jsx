import IconLink from "../customHTML/IconLink";

const NavbarRightLayout = ({ to, icon }) => {
  return (
    <div className="item">
      <IconLink to={to} icon={icon} />
    </div>
  );
};
export default NavbarRightLayout;
