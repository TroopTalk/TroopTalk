import { DarkModeContext } from "../../context/export.js";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { Post } from "../export.js";
import { useContext } from "react";
import "./posts.scss";

const Posts = ({ userId }) => {
  const {darkMode } = useContext(DarkModeContext);
  const darkLight = { color: darkMode ? "#fff" : "#000" };

  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get(`/posts?userId=${userId}`).then((res) => {
      return res.data;
    }),
  );

  return (
    <>
      <div className="POSTS_" style={darkLight}>
        {error ? "Something went wrong!" : isLoading ? "loading" : data.map((post) => <Post post={post} key={post.id} />)}
      </div>
    </>
  );
};

export default Posts;
