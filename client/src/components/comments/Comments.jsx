import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";
import { makeRequest } from "../../axios";
import { input } from "./context";
import moment from "moment";
import "./comments.scss";

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    }),
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    },
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="COMMENTS__">
      <div className="COMMENTS__write">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <input {...input} value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button onClick={handleClick}>Send</button>
      </div>
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((comment) => (
            <div className="COMMENTS__comment">
              <img src={"/upload/" + comment.profilePic} alt="" />
              <div className="COMMENTS__info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="COMMENTS__date">{moment(comment.createdAt).fromNow()}</span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
