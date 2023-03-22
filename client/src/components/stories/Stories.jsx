import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useState, useContext } from "react";
import { makeRequest } from "../../axios";
import "./stories.scss";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["stories"], async () => {
    const res = await makeRequest.get("/api/stories/");
    return res.data;
  });

  const [newStory, setNewStory] = useState("");

  const addStoryMutation = useMutation(async (newStoryData) => {
    const res = await makeRequest.post("/api/stories/", newStoryData);
    return res.data;
  });

  const handleAddStory = () => {
    addStoryMutation.mutate({ name: newStory }); // Call the mutate function with the new story data
    setNewStory(""); // Reset the input field after adding the new story
  };

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <input type="text" value={newStory} onChange={(e) => setNewStory(e.target.value)} />
        <button onClick={handleAddStory}>+</button>
      </div>
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((story) => (
            <div className="story" key={story.id}>
              <img src={story.img} alt="" />
              <span>{story.name}</span>
            </div>
          ))}
    </div>
  );
};

export default Stories;
