import Button from "@mui/material/Button";

const ShareRight = ({onClick}) => {
  return (
    <div className="SHARE__right">
      <Button variant="contained" size="small" onClick={onClick}>
        Share
      </Button>
    </div>
  );
};
export default ShareRight;
