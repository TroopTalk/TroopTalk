// import { useContext } from "react";
// import { AuthContext } from "../../context/export.js";
// import { Link } from "react-router-dom";
// import moment from "moment";
import "./messages.scss";

const Messages = ({ message }) => {
  // const { currentUser } = useContext(AuthContext);
  if (!message) {
    return null; // Return null if the message object is not defined
  }

  return (
    <>
      <div className="MESSAGES__">
        {/* <div className={`MESSAGES__${currentUser.id === message.userId ? "sent" : "received"}`}>
          <div className="MESSAGES__container">
            <div className="MESSAGES__user">
              <div className="MESSAGES__userInfo">
                <img src={"/upload/" + message.profilePic} alt={`Profile pic for ${message.name}`} />
                <div className="MESSAGES__details">
                  <Link to={`/profile/${message.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <span className="MESSAGES__name">{message.name}</span>
                  </Link>
                  <span className="MESSAGES__date">{moment(message.createdAt).fromNow()}</span>
                </div>
              </div>
            </div>
            <div className="MESSAGES__content">
              <p>{message.desc}</p>
            </div>
          </div>
        </div>
        <span style={"color: blue;"}>test</span> */}
      </div>
    </>
  );
};

export default Messages;
