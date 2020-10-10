import express from "express";
const routes = express.Router();
import multer from "multer";
import multerConfig from "./config/multer.js";
const uload = multer({ dest: "tmp/uploads/" });

import {
  store,
  index,
  remove,
  show,
  update,
} from "../src/controllers/PostController.js";

routes.get("/", (req, res) => {
  res.status(200).send("Hello!");
});

routes.get("/sync", index);
routes.post("/upload", multer(multerConfig).single("postImage"), store);
routes.get("/sync/:id", show);
routes.put("/sync/:id", update);
routes.delete("/sync/:id", remove);

export default routes;
