import { Button } from "@mui/material";

const ShareTop = ({ placeholder, onChange, value, file, onRemovePicture }) => {
  return (
    <div className="SHARE__top">
      <div className="SHARE__left">
        <input type="text" placeholder={placeholder} onChange={onChange} value={value} />
      </div>
      <div className="SHARE__right">
        {file && (
          <div className="SHARE_right_file-preview">
            <img className="SHARE__file" alt="Selected file preview" src={URL.createObjectURL(file)} />
            <Button variant="contained" onClick={onRemovePicture}>Remove</Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ShareTop;
