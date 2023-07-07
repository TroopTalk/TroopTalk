const ShareItem = ({ img, alt , span }) => {
  return (
    <div className="SHARE__item">
      <img src={img} alt={alt} />
      <span>Tag Friends</span>
    </div>
  );
};
export default ShareItem;
