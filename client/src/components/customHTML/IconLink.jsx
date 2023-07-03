import Icon from "./Icon";
import { Link } from "react-router-dom";

const IconLink = ({ className, to, icon }) => {
  return (
    <Link to={to} className={className}>
      <Icon icon={icon} />
    </Link>
  );
};
export default IconLink;
