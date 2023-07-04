import postController from "../controllers/posts.js";
import express from "express";

const postRouter = express.Router();

// * Get Posts
postRouter.get("/get", postController.getPosts);

// * Make posts
postRouter.post("/make", postController.createPost);

// * update post
postRouter.post("/update", postController.updatePost);

// * Delete Post
postRouter.post("/delete", postController.deletePost);
