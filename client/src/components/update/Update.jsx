import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FileUpload, InputField } from "./import";
import { makeRequest } from "../../axios";
import { inputFields } from "./data";
import React, { useState } from "react";
import "./update.scss";

const Update = ({ setOpenUpdate, user }) => {
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);

  const [texts, setTexts] = useState({
    email: user.email,
    password: user.password,
    name: user.name,
    city: user.city,
    website: user.website,
  });

  const upload = async (file) => {
    console.log(file);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (user) => {
      return makeRequest.put("/users", user);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["user"]);
      },
    },
  );

  const handleClick = async (e) => {
    e.preventDefault();

    //TODO: find a better way to get image URL

    let coverUrl;
    let profileUrl;
    coverUrl = cover ? await upload(cover) : user.coverPic;
    profileUrl = profile ? await upload(profile) : user.profilePic;

    mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });
    setOpenUpdate(false);
    setCover(null);
    setProfile(null);
  };

  return (
    <div className="UPDATE__">
      <div className="UPDATE__wrapper">
        <h1>Update Your Profile</h1>
        <form>
          <div className="UPDATE__files">
            <FileUpload type="text" label="cover" file={cover} setFile={setCover} user={user} />
            <FileUpload type="text" label="profile" file={profile} setFile={setProfile} user={user} />
          </div>
          {inputFields.map((field) => (
            <InputField key={field.name} label={field.label} value={field.value} name={field.name} handleChange={handleChange} />
          ))}
          <button onClick={handleClick}>Update</button>
        </form>
        <button className="UPDATE__close" onClick={() => setOpenUpdate(false)}>
          close
        </button>
      </div>
    </div>
  );
};

export default Update;
