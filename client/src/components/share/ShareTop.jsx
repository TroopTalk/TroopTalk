const ShareTop = ({ placeholder, onChange, value, file }) => {
  return (
    <div className="SHARE__top">
      <div className="SHARE__left">
        <input type="text" placeholder={placeholder} onChange={onChange} value={value} />
      </div>
      <div className="SHARE__right">{file && <img className="SHARE__file" alt="Selected file preview" src={URL.createObjectURL(file)} />}</div>
    </div>
  );
};
export default ShareTop;
