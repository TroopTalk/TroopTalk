import { useMutation, useQueryClient } from "@tanstack/react-query";
import { imageItem, mapItem, friendItem } from "./items.js";
import { AuthContext } from "../../context/export.js";
import { AccountCircle } from "@mui/icons-material";
import { useContext, useState } from "react";
import { makeRequest } from "../../axios";
import ShareItem from "./ShareItem.jsx";
import axios from "axios";
import "./share.scss";

const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/share", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts/share", newPost);
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

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const string = reader.result;

      axios
        .post("/api/upload", { image: string })
        .then((res) => {
          // Handle the response
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    reader.readAsDataURL(file); // Read the file as a data URL (base64)
  };

  return (
    <div className="SHARE__">
      <div className="SHARE__container">
        <div className="SHARE__top">
          <div className="SHARE__left">
            {/* {currentUser.profilePic ? <img src={`/upload/${currentUser.profilePic}`} alt={`${currentUser.name}'s profile pic`} /> : <AccountCircle>{currentUser.name[0]}</AccountCircle>} */}
            <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} onChange={(e) => setDesc(e.target.value)} value={desc} style={{ display: "none" }} />
          </div>
          <div className="SHARE__right">{file && <img className="SHARE__file" alt="Selected file preview" src={URL.createObjectURL(file)} />}</div>
        </div>
        <hr />
        <div className="SHARE__bottom">
          <div className="SHARE__left">
            <input type="file" id="file-input" onChange={handleFileInputChange} style={{ display: "none" }} />
            <label htmlFor="file-input" className="custom-file-label">
              Upload Image
            </label>
            <ShareItem {...imageItem} />
            <ShareItem {...mapItem} />
            <ShareItem {...friendItem} />
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
