import express from "express";
import cors from "cors";
import postRouter from "./routers/post.router";
import topicRouter from "./routers/topic.router";
import userRouter from "./routers/user.router";

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use("/api/posts", postRouter);
app.use("/api/topics", topicRouter);
app.use("/api/users", userRouter);

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
