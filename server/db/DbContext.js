import mongoose from "mongoose";
import PostSchema from "../models/Post";
import ProfileSchema from "../models/Profile";
import CommentSchema from "../models/Comment";
import FollowerSchema from "../models/Follower";

class DbContext {
  Post = mongoose.model("Post", PostSchema);
  Comment = mongoose.model("Comment", CommentSchema);

  Profile = mongoose.model("Profile", ProfileSchema);
  Follower = mongoose.model("Follower", FollowerSchema);
}

export const dbContext = new DbContext();
