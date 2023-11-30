import * as crypto from "crypto";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import UserModel from "./models/Users";

const mongoConnectionString =
  "mongodb+srv://jaimexu8:O9mfNVM7YcrRLGPB@cluster0.ku3yaff.mongodb.net/cafetype?retryWrites=true&w=majority";
mongoose.connect(mongoConnectionString);

const app = express();

app.get("/getUsers", async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/createUser", async (req: Request, res: Response) => {
  const user = req.body;


  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
  // TODO: Generate random user id = crypto.randomUUID();
});

app.listen(3001, () => {
  console.log("Server running");
});
