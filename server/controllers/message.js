import { db } from "../connect.js";
import { jwt } from "../packages.js";

export const getMessages = (req, res) => {
  const q = "SELECT * FROM messages";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addMessage = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "INSERT INTO messages (`userId`, `desc`) VALUES (?)";
    const values = [userInfo.id, req.body.desc];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Message has been added.");
    });
  });
};

export const deleteMessage = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM messages WHERE `id` = ? AND `userId` = ?";

    db.query(q, [req.params.messageId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Message has been deleted.");
    });
  });
};
