import express from "express";
const routes = express.Router();

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
routes.post("/upload", store);
routes.get("/sync/:id", show);
routes.put("/sync/:id", update);
routes.delete("/sync/:id", remove);

export default routes;
