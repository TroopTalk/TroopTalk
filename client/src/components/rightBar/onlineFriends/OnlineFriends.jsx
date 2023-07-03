import FriendsOnline from "./friendsOnline/FriendsOnline";

const OnlineFriends = () => {
  const img = "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600";

  return (
    <div className="RIGHT_BAR__item">
      <span>Online Friends</span>
      <FriendsOnline img={img} alt={"img"} name={"Issa Test"} />
      <FriendsOnline img={img} alt={"img"} name={"Issa Test"} />
    </div>
  );
};
export default OnlineFriends;
