import { Button as MuiButton } from "@mui/material";

const Button = ({ variant, text, onClick }) => <MuiButton variant={variant} onClick={onClick}>{text}</MuiButton>;
export default Button;
