import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Pusher from "pusher";
import env from "dotenv";
import routes from "./src/routes.js";

//app config
const app = express();
env.config();
const port = process.env.PORT || 8030;

//middleware

app.use(express.json());
app.use(cors());

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
