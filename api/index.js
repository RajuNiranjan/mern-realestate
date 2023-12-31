import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log(e));

const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, () => {
  console.log(`server is running at port number ${port}`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
