import { Router } from "express";
import { sample_posts } from "../data";

const router = Router();

router.get("/", (req, res) => {
  res.send(sample_posts);
});

router.get("/:postId", (req, res) => {
  const postId = req.params.postId;
  const post = sample_posts.find((post) => post.postId == postId);

  res.send(post);
});

router.get("/topic/:topicName", (req, res) => {
  const topicName = req.params.topicName;
  const posts = sample_posts.filter((post) =>
    post.topic.toLowerCase().includes(topicName.toLowerCase())
  );

  res.send(posts);
});

router.get("/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const posts = sample_posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  res.send(posts);
});

export default router;
