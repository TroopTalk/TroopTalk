import Post from "../models/post.js";

const postController = {
  getPosts: async (req, res) => {
    try {
      const posts = await Post.find().populate("author", "username");

      res.status(200).json({ posts });
    } catch (error) {
      console.error("Failed to get posts:", error);
      res.status(500).json({ message: "Failed to get posts", error: error.message });
    }
  },

  createPost: async (req, res) => {
    try {
      const { title, content } = req.body;

      const newPost = new Post({
        title,
        content,
        author: req.user._id,
      });

      // Save the new post to the database
      const savedPost = await newPost.save();

      res.status(201).json({ message: "Post created successfully", post: savedPost });
    } catch (error) {
      console.error("Failed to create post:", error);
      res.status(500).json({ message: "Failed to create post", error: error.message });
    }
  },

  updatePost: async (req, res) => {
    try {
      const postId = req.params.id;
      const { title, content } = req.body;

      const post = await Post.findById(postId);

      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }

      post.title = title;
      post.content = content;

      await post.save();

      res.status(200).json({ message: "Post updated successfully", post });
    } catch (error) {
      console.error("Failed to update post:", error);
      res.status(500).json({ message: "Failed to update post", error: error.message });
    }
  },

  deletePost: async (req, res) => {
    try {
      const postId = req.params.id;
      const post = await Post.findByIdAndDelete(postId);

      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      console.error("Failed to delete post:", error);
      res.status(500).json({ message: "Failed to delete post", error: error.message });
    }
  },
};

export default postController;
