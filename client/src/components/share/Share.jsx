import { AuthContext } from "../../context/export.js";
import { useContext, useState, useRef } from "react";
import { ShareBottom, ShareTop } from "./import.js";
import { AccountCircle } from "@mui/icons-material";
import { makeRequest } from "../../axios";
import axios from "axios";
import "./share.scss";

const Share = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  const { currentUser } = useContext(AuthContext);

  const fileInputRef = useRef(null);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/share", formData);
      console.log(formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    // Perform the API request directly without using useMutation
    const formData = new FormData();
    formData.append("file", file);
    formData.append("text", text);
    axios
      .post("/api/upload", formData)
      .then((res) => {
        // Handle the response if needed
        // Perform the API request to save the post with the image URL
        const imgUrl = res.data.imageUrl;
        axios
          .post("/posts/share", { text, img: imgUrl })
          .then((res) => {
            // Handle the response if needed
            // Reset the state
            setText("");
            setFile(null);
          })
          .catch((err) => {
            // Handle error if needed
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const props = {
    shareTopProps: {
      placeholder: `What's on your mind ${currentUser.name}?`,
      onChange: (e) => setText(e.target.value),
      value: text,
      file: file,
    },
    shareBottomProps: {
      handleFileInputChange: handleFileInputChange,
      fileInputRef: fileInputRef,
      onClick: upload,
    },
  };

  return (
    <div className="SHARE__">
      <div className="SHARE__container">
        <ShareTop {...props.shareTopProps} />
        <hr />
        <ShareBottom {...props.shareBottomProps} />
      </div>
    </div>
  );
};

export default Share;

{
  /* {currentUser.profilePic ? <img src={`/upload/${currentUser.profilePic}`} alt={`${currentUser.name}'s profile pic`} /> : <AccountCircle>{currentUser.name[0]}</AccountCircle>} */
}
