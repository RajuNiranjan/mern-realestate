import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import path from "path";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log(e));

const app = express();

const __dirname = path.resolve();

app.use(express.json());

const port = 3000;

app.listen(port, () => {
  console.log(`server is running at port number ${port}`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
