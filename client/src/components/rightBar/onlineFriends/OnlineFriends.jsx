import FriendsOnline from "./friendsOnline/FriendsOnline";
import { people } from "../../../assets/img";

const OnlineFriends = () => {
  const onlineFriends = {
    img: people,
    alt: "img",
    firstName: "Issa Test",
  };

  return (
    <div className="RIGHT_BAR__item">
      <span>Online Friends</span>
      <FriendsOnline {...onlineFriends} />
      <FriendsOnline {...onlineFriends} />
    </div>
  );
};

export default OnlineFriends;
