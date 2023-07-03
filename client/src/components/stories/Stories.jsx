import { AuthContext, DarkModeContext } from "../../context/export.js";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useState, useContext } from "react";
import { makeRequest } from "../../axios";
import "./stories.scss";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const darkMode = useContext(DarkModeContext);

  const [newStory, setNewStory] = useState("");
  const { data, isLoading, isError } = useQuery("stories", async () => {
    const response = await makeRequest.get("/api/stories/");
    return response.data;
  });

  const addStoryMutation = useMutation(async (newStoryData) => {
    const res = await makeRequest.post("/api/stories/", newStoryData);
    return res.data;
  });

  const handleAddStory = () => {
    addStoryMutation.mutate({ name: newStory });
    setNewStory("");
  };

  return (
    <div className="STORIES__">
      <div className="STORIES__story">
        <img src={`/upload/${currentUser.profilePic}`} alt="" />
        <span>{currentUser.name}</span>
        <input type="text" value={newStory} onChange={(e) => setNewStory(e.target.value)} />
        <button onClick={handleAddStory}>+</button>
      </div>
      {isError && <div style={{ color: darkMode ? "#fff" : "#000" }}>Something went wrong</div>}
      {isLoading && <div style={{ color: darkMode ? "#fff" : "#000" }}>Loading...</div>}
      {!isLoading &&
        !isError &&
        data.map((story) => (
          <div className="STORIES__story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        ))}
    </div>
  );
};

export default Stories;
