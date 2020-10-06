import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  comments: [],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Posts", PostSchema);
