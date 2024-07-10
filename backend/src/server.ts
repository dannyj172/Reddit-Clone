import express from "express";
import cors from "cors";
import { sample_posts, sample_topics } from "./data";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("/api/posts", (req, res) => {
  res.send(sample_posts);
});

app.get("/api/post/:postId", (req, res) => {
  const postId = req.params.postId;
  const post = sample_posts.find((post) => post.postId == postId);

  res.send(post);
});

app.get("/api/posts/:topicName", (req, res) => {
  const topicName = req.params.topicName;
  const posts = sample_posts.filter((post) =>
    post.topic.toLowerCase().includes(topicName.toLowerCase())
  );

  res.send(posts);
});

app.get("/api/posts/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const posts = sample_posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  res.send(posts);
});

app.get("/api/topics", (req, res) => {
  res.send(sample_topics);
});

app.get("/api/topics/:topicName", (req, res) => {
  const topicName = req.params.topicName;

  const topic = sample_topics.find((topic) => topic.topicName == topicName);

  res.send(topic);
});

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
