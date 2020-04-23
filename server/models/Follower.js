import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Follower = new Schema(
  {
    creatorEmail: { type: String },
    followerEmail: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
Follower.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});
Follower.virtual("follower", {
  localField: "followerEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Follower;
