import express from "express";
import type { Request, Response } from "express"
import User from "../models/user.ts"

const router = express.Router();

router.route("/login").post( async(req: Request, res: Response) => {
  const username = req.body.username as string;
  const password = req.body.password as string;

  const account = await User.findOne({ name: username });
  if (!account) {
    res.status(404).json(`Error: User not found!`)
    return;
  }

  //TODO: actually implement password hashing & salting
  if (account?.passwordHash === password) {
    res.cookie("userid", account?.id)
    res.status(200).json("User logged in successfully!")
  }
});

router.route("/register").post( async(req: Request, res: Response) => {
  const username = req.body.username as string;
  const password = req.body.password as string;

  const account = await User.findOne({ name: username });
  if (account) {
    res.status(406).json(`Error: an user already exists`)
    return;
  }

  const email = req.body.email as string;
  const telephone = req.body.telephone as string;

  //TODO: actually implement password hashing & salting
  const newUser = new User({
    name: username,
    passwordHash: password,
    email,
    telephone,
  });

  await newUser.save();
  res.status(200).json("User registered successfully!");
});

router.route("/register").get( async(req: Request, res: Response) => {
  const users = await User.find();
  res.status(200).json(users);
})

export default router;
