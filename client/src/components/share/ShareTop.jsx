// import { Button } from "@mui/material";
import Button from "../customHTML/mui/button/Button";
import Textarea from "../customHTML/mui/textArea/Textarea";

const ShareTop = ({ placeholder, onChange, value, file, onRemovePicture }) => {
  return (
    <div className="SHARE__top">
      <div className="SHARE__left">
        <textarea type="text" placeholder={placeholder} onChange={onChange} value={value} />
      </div>
      <div className="SHARE__right">
        {file && (
          <div className="SHARE_right_file-preview">
            <img className="SHARE__file" alt="Selected file preview" src={URL.createObjectURL(file)} />
            <hr />
            <Button variant="contained" onClick={onRemovePicture} text="Remove" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareTop;
