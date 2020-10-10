import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Pusher from "pusher";
import env from "dotenv";
import routes from "./src/routes.js";
import path from "path";
//app config
const __dirname = path.resolve();

const app = express();
env.config();
const port = process.env.PORT || 8030;

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/static", express.static("tmp/uploads")); //da pasta server até tmp/uploads/

//db config
mongoose.connect(process.env.MONGO_CONNECTION, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("db is connected");
});

//api routes
app.use(routes);

//listener
app.listen(port, () => console.log("funcionando!!"));
