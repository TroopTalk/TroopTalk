import { Button as MuiButton } from "@mui/material";

const Button = ({ variant, type, text, onClick }) => (
  <MuiButton variant={variant} type={type} onClick={onClick}>
    {text}
  </MuiButton>
);

export default Button;
