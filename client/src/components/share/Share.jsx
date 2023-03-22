import { useMutation, useQueryClient } from "@tanstack/react-query";
import { map, image, friend } from "../../assets/img.js";
import { AuthContext } from "../../context/export.js";
import { AccountCircle } from "@mui/icons-material";
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
    <div className="SHARE__">
      <div className="SHARE__container">
        <div className="SHARE__top">
          <div className="SHARE__left">
            {currentUser.profilePic ? <img src={`/upload/${currentUser.profilePic}`} alt={`${currentUser.name}'s profile pic`} /> : <AccountCircle>{currentUser.name[0]}</AccountCircle>}
            <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} onChange={(e) => setDesc(e.target.value)} value={desc} />
          </div>
          <div className="SHARE__right">{file && <img className="SHARE__file" alt="Selected file preview" src={URL.createObjectURL(file)} />}</div>
        </div>
        <hr />
        <div className="SHARE__bottom">
          <div className="SHARE__left">
            <input type="file" id="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
            <label htmlFor="file">
              <div className="SHARE__item">
                <img src={image} alt="Add img icon" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="SHARE__item">
              <img src={map} alt="Add place icon" />
              <span>Add Place</span>
            </div>
            <div className="SHARE__item">
              <img src={friend} alt="Tag friends icon" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="SHARE__right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
