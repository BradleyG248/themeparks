import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const VoteReg = new Schema(
  {
    email: { type: String, required: true },
    value: { type: Number, default: 0 }
  }
)
const Comment = new Schema(
  {
    postId: { type: ObjectId, ref: "Post", required: true },
    votes: [VoteReg],
    description: { type: String, required: true },
    creatorEmail: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Comment.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Comment;
