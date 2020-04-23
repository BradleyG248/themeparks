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

Follower.index({ followerEmail: 1, creatorEmail: 1 }, { unique: true });
export default Follower;
