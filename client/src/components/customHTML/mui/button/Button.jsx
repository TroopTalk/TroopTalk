import { Button as MuiButton } from "@mui/material";

const Button = ({ className, variant, type, onClick, children }) => {
  const buttonProps = {
    className: className,
    variant: variant,
    type: type,
    onClick: onClick,
  };

  return <MuiButton {...buttonProps}>{children}</MuiButton>;
};

export default Button;
