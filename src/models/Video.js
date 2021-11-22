import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hastags: [{ type: String }],
  meta: {
    views: Number,
    ratings: Number,
  },
});

const movieModel = mongoose.model("video", videoSchema);
export default movieModel;
