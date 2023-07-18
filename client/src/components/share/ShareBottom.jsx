import Button from "../customHTML/mui/button/Button";
import { ShareRight, ShareItem } from "./import";
import { friendItem, mapItem } from "./items";
import UploadIcon from "@mui/icons-material/Upload";

const ShareBottom = ({ handleFileInputChange, fileInputRef, onClick }) => {
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="SHARE__bottom">
      <div className="SHARE__left">
        <input type="file" id="file-input" onChange={handleFileInputChange} style={{ display: "none" }} ref={fileInputRef} />
        <label htmlFor="file-input" className="custom-file-label">
          <Button className="Share__button" variant="contained" onClick={handleButtonClick}>
            <UploadIcon />Image
          </Button>
        </label>
        <ShareItem {...mapItem} />
        <ShareItem {...friendItem} />
      </div>
      <ShareRight onClick={onClick} />
    </div>
  );
};
export default ShareBottom;
