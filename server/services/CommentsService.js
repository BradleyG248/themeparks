import { dbContext } from "../db/DbContext";
import { BadRequest, UnAuthorized } from "../utils/Errors";


class CommentsService {

  async getAll(query = {}) {
    let comments = await dbContext.Comment.find(query).populate(
      "creator",
      "name picture"
    );
    return comments;
  }
  async vote(data, id) {
    let update = { votes: data.votes }
    let comment = await dbContext.Comment.findByIdAndUpdate(id, update);
    // @ts-ignore
    comment.body = update.body;
    await comment.save();
    return comment;
  }
  async getById(id) {
    return await dbContext.Comment.findById(id);
  }
  async create(body, email) {
    return await dbContext.Comment.create(body);

  }
  async edit(id, update, email) {
    let comment = await dbContext.Comment.findByIdAndUpdate(id, update);
    // @ts-ignore
    if (comment.creatorEmail != email) {
      throw new UnAuthorized();
    }
    // @ts-ignore
    comment.body = update.body;
    await comment.save();
    return comment;
  }
  async delete(id, email) {
    let comment = await dbContext.Comment.findById(id);
    // @ts-ignore
    if (comment.creatorEmail != email) {
      throw new UnAuthorized();
    }
    await dbContext.Comment.findByIdAndDelete(id);
  }
  async getCommentsByPostId(id) {
    return await dbContext.Comment.find({ postId: id });
  }
}

export const commentsService = new CommentsService();
