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
  async vote(data, id, email) {
    if (data.vote > 0) {
      data.vote = 1;
    }
    else {
      data.vote = -1;
    }
    let comment = await dbContext.Comment.findById(id);
    let vote = comment.votes.findIndex(e => e.email == email);
    if (vote != -1) {
      comment.votes[vote].value = data.vote;
    }
    else {
      comment.votes.push({ email, value: data.vote });
    }
    let newComment = await dbContext.Comment.findByIdAndUpdate(id, comment, { new: true });
    return newComment;
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
