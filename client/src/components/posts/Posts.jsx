import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { Post } from "../export.js";
import "./posts.scss";

const Posts = () => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get(`/posts/get`).then((res) => {
      return res.data;
    }),
  );

  return (
    <>
      <div className="POSTS_">{error ? "Something went wrong!" : isLoading ? "loading" : data.map((post) => <Post post={post} key={post.id} />)}</div>
    </>
  );
};

export default Posts;
