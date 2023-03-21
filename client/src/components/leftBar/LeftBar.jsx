import { courses, events, fund, friends, gallery, gaming, groups, market, memories, messages, tutorials, videos, watch } from "../../assets/img";
import { AuthContext } from "../../context/export.js";
import { useContext } from "react";
import "./leftBar.scss";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={"/upload/" + currentUser.profilePic} alt={`${currentUser.name}'s profile pic`} />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={friends} alt="Friends icon" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={groups} alt="Groups icon" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={market} alt="Marketplace icon" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={watch} alt="Watch icon" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={memories} alt="Memories icon" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={events} alt="Events icon" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={gaming} alt="Gaming icon" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={gallery} alt="Gallery icon" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={videos} alt="Videos icon" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={messages} alt="Messages icon" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={fund} alt="Fundraiser icon" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={tutorials} alt="Tutorials icon" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={courses} alt="Courses icon" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
