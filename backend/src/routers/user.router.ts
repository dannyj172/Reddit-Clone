import jwt from "jsonwebtoken";
import { Router } from "express";
import { sample_users } from "../data";
import asyncHandler from "express-async-handler";
import { UserModel } from "../models/user.model";

const router = Router();

router.get(
  "/seed",
  asyncHandler(async (req, res) => {
    const usersCount = await UserModel.countDocuments();
    if (usersCount > 0) {
      res.send("Seed is already done!");
      return;
    }

    await UserModel.create(sample_users);
    res.send("Seed Is Done!");
  })
);

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
