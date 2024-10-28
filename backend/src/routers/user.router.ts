import jwt from "jsonwebtoken";
import { Router } from "express";
import { sample_users } from "../data";

const router = Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = sample_users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    res.send(genereteTokenResponse(user));
  } else {
    res.status(400).send("Invalid Username or Password!");
  }
});

const genereteTokenResponse = (user: any) => {
  const token = jwt.sign(
    {
      username: user.username,
    },
    "SomeRandomText",
    {
      expiresIn: "30d",
    }
  );

  user.token = token;

  return user;
};

export default router;
