import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="RIGHT_BAR__">
      <div className="RIGHT_BAR__container">
        <div className="RIGHT_BAR__item">
          <span>Suggestions For You</span>
          <div className="RIGHT_BAR__user">
            <div className="RIGHT_BAR__userInfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="RIGHT_BAR__buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="RIGHT_BAR__item">
          <span>Latest Activities</span>
          <div className="RIGHT_BAR__user">
            <div className="RIGHT_BAR__userInfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="RIGHT_BAR__item">
          <span>Online Friends</span>
          <div className="RIGHT_BAR__user">
            <div className="RIGHT_BAR__userInfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="RIGHT_BAR__online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="RIGHT_BAR__user">
            <div className="RIGHT_BAR__userInfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="RIGHT_BAR__online" />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
