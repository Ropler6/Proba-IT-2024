import express from "express";
import type { Request, Response } from "express"
import User from "../models/user.ts"

const router = express.Router();

router.route("/login").post( async(req: Request, res: Response) => {
  const email = req.body.email as string;
  const password = req.body.password as string;

  console.log(`Searching for ${email}...`);

  const account = await User.findOne({ email: email });
  if (!account) {
    res.status(404).json(`Error: User not found!`)
    return;
  }

  //TODO: actually implement password hashing & salting
  if (account?.passwordHash === password) {
    res.status(200).json(account);
  }
  else {
    res.status(401).json("Error: The password is wrong!");
  }
});

router.route("/register").post( async(req: Request, res: Response) => {
  const email = req.body.email as string;
  const password = req.body.password as string;

  console.log(`Trying to register ${email} with password ${password}`);
  const account = await User.findOne({ email: email});
  if (account) {
    res.status(406).json(`Error: an user already exists`)
    return;
  }

  const username = req.body.username as string;
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

export default router;
