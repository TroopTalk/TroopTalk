import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const FileUpload = ({ label, file, setFile, user }) => {
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const input = {
    type: "file",
    id: label,
    style: { display: "none" },
    onChange: handleChange,
  };

  return (
    <div>
      <label htmlFor={label}>
        <span>{label}</span>
        <div className="UPDATE__imgContainer">
          <img src={file ? URL.createObjectURL(file) : `/upload/${user[label]}`} alt="" />
          <CloudUploadIcon className="UPDATE__icon" />
        </div>
      </label>
      <input {...input} />
    </div>
  );
};

export default FileUpload;
