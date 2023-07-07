import IconLink from "../customHTML/IconLink";

const NavbarRightLayout = ({ to, icon }) => {
  const iconLink = {
    to: to,
    icon: icon,
  };

  return (
    <div className="item">
      <IconLink {...iconLink} />
    </div>
  );
};
export default NavbarRightLayout;
