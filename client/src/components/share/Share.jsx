import { useMutation, useQueryClient } from "@tanstack/react-query";
import { map, image, friend } from "../../assets/img.js";
import { AuthContext } from "../../context/export.js";
import { useContext, useState } from "react";
import { makeRequest } from "../../axios";
import "./share.scss";

const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    },
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, img: imgUrl });
    setDesc("");
    setFile(null);
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={`/upload/${currentUser.profilePic}`} alt={`${currentUser.name}'s profile picture`} />
            <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} onChange={(e) => setDesc(e.target.value)} value={desc} />
          </div>
          <div className="right">{file && <img className="file" alt="Selected file preview" src={URL.createObjectURL(file)} />}</div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
            <label htmlFor="file">
              <div className="item">
                <img src={image} alt="Add image icon" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={map} alt="Add place icon" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={friend} alt="Tag friends icon" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
