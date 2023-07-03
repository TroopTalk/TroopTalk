const NavLayout = ({ className, style, left, right }) => {
  return (
    <div className={className} style={style}>
      {left}
      {right}
    </div>
  );
};
export default NavLayout;
