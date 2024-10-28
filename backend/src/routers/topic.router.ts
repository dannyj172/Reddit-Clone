import { Router } from "express";
import { sample_topics } from "../data";

const router = Router();

router.get("/", (req, res) => {
  res.send(sample_topics);
});

router.get("/:topicName", (req, res) => {
  const topicName = req.params.topicName;

  const topic = sample_topics.find((topic) => topic.topicName == topicName);

  res.send(topic);
});

export default router;
