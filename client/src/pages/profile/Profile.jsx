import { EmailOutlinedIcon, FacebookTwoToneIcon, InstagramIcon, LanguageIcon, LinkedInIcon, MoreVertIcon, PinterestIcon, PlaceIcon, TwitterIcon } from "./icons.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Posts, Update } from "../../components/export.js";
import { AuthContext } from "../../context/export.js";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { makeRequest } from "../../axios";
import "./profile.scss";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    }),
  );

  const { isLoading: rIsLoading, data: relationshipData } = useQuery(["relationship"], () =>
    makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
      return res.data;
    }),
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if (following) return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"]);
      },
    },
  );

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
  };

  return (
    <div className="PROFILE__">
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="PROFILE__images">
            <img src={"/upload/" + data.coverPic} alt="" className="PROFILE__cover" />
            <img src={"/upload/" + data.profilePic} alt="" className="PROFILE__profilePic" />
          </div>
          <div className="PROFILE__profileContainer">
            <div className="PROFILE__uInfo">
              <div className="PROFILE__left">
                <Link to={{ pathname: "https://www.facebook.com" }} target="_blank">
                  <FacebookTwoToneIcon fontSize="large" />
                </Link>
                <Link to={{ pathname: "https://www.instagram.com" }} target="_blank">
                  <InstagramIcon fontSize="large" />
                </Link>
                <Link to={{ pathname: "https://twitter.com" }} target="_blank">
                  <TwitterIcon fontSize="large" />
                </Link>
                <Link to={{ pathname: "https://www.linkedin.com" }} target="_blank">
                  <LinkedInIcon fontSize="large" />
                </Link>
                <Link to={{ pathname: "https://www.pinterest.com" }} target="_blank">
                  <PinterestIcon fontSize="large" />
                </Link>
              </div>
              <div className="PROFILE__center">
                <span>{data.name}</span>
                <div className="PROFILE__info">
                  <div className="PROFILE__item">
                    <PlaceIcon />
                    <span>{data.city}</span>
                  </div>
                  <div className="PROFILE__item">
                    <LanguageIcon />
                    <span>{data.website}</span>
                  </div>
                </div>
                {rIsLoading ? "loading" : userId === currentUser.id ? <button onClick={() => setOpenUpdate(true)}>update</button> : <button onClick={handleFollow}>{relationshipData.includes(currentUser.id) ? "Following" : "Follow"}</button>}
              </div>
              <div className="PROFILE__right">
                <EmailOutlinedIcon />
                <MoreVertIcon />
              </div>
            </div>
            <Posts userId={userId} />
          </div>
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  );
};

export default Profile;
