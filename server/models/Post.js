import mongoose from "mongoose";
const Schema = mongoose.Schema;

const VoteReg = new Schema(
  {
    email: { type: String, required: true },
    value: { type: Number, default: 0 }
  }
)

const Post = new Schema(
  {
    title: { type: String, required: true },
    closed: { type: Boolean, default: false },
    votes: [VoteReg],
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