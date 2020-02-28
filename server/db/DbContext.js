import mongoose from "mongoose";
import PostSchema from "../models/Post";
import ProfileSchema from "../models/Profile";
import CommentSchema from "../models/Comment";

class DbContext {
  Post = mongoose.model("Post", PostSchema);
  Comment = mongoose.model("Comment", CommentSchema);

  Profile = mongoose.model("Profile", ProfileSchema);
}

export const dbContext = new DbContext();
