import mongoose from "mongoose";
import Post from "../models/Post.js";

const Posts = mongoose.model("Posts");

export function store(req, res) {
  const { caption, user, comments } = req.body;
  const { originalname: imageName, size, filename: key } = req.file;

  console.log(req.file);

  Posts.create(
    {
      caption,
      user,
      comments,
      imageName,
      size,
      key,
      url: "",
    },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    }
  );
}

export function index(req, res) {
  Posts.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

export function show(req, res) {
  Posts.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

export function update(req, res) {
  Posts.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, useFindAndModify: false },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    }
  );
}

export function remove(req, res) {
  Posts.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}
