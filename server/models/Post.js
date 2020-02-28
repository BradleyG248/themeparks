import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: { type: String, required: true },
    closed: { type: Boolean, required: true, default: false },
    votes: { type: Number, required: true },
    imgUrl: { type: String },
    description: { type: String, required: true },
    creatorEmail: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Post.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Post;