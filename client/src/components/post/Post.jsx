import { NotLiked, Liked, More, Share, Text } from "./icons.js";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { AuthContext } from "../../context/export.js";
import { useContext, useState } from "react";
import { makeRequest } from "../../axios";
import { Comments } from "../export.js";
import { Link } from "react-router-dom";
import moment from "moment";
import "./post.scss";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const { isLoading, data } = useQuery(["likes", post.id], () =>
    makeRequest.get(`/likes?postId=${post.id}`).then((res) => {
      return res.data;
    }),
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (liked) => {
      if (liked) return makeRequest.delete("/likes?postId=" + post.id);
      return makeRequest.post("/likes", { postId: post.id });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["likes"]);
      },
    },
  );
  const deleteMutation = useMutation(
    (postId) => {
      return makeRequest.delete("/posts/delete/" + postId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["postMores"]);
      },
    },
  );

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  return (
    <div className="POST__">
      <div className="POST__container">
        <div className="POST__user">
          <div className="POST__userInfo">
            <img src={"/upload/" + post.profilePic} alt={`Profile pic for ${post.name}`} />
            <div className="POST__details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                <span className="POST__name">{post.name}</span>
              </Link>
              <span className="POST__date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <More onClick={() => setMenuOpen(!menuOpen)} />
          {menuOpen && post.userId === currentUser.id && <button onClick={handleDelete}>Delete</button>}
        </div>
        <div className="POST__content">
          <p>{post.desc}</p>
          <img src={"/upload/" + post.img} alt={`Pic for post ${post.id}`} />
        </div>
        <div className="POST__info">
          <div className="POST__item">
            {isLoading ? "loading" : data.includes(currentUser.id) ? <Liked style={{ color: "red" }} onClick={handleLike} /> : <NotLiked onClick={handleLike} />}
            {data?.length} Likes
          </div>
          <div className="POST__item" onClick={() => setCommentOpen(!commentOpen)}>
            <Text />
            Comments
          </div>
          <div className="POST__item">
            <Share />
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
