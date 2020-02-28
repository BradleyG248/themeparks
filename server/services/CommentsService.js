import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";



class CommentsService {
  async getAll(query = {}) {
    let comments = await dbContext.Comment.find(query).populate(
      "creator",
      "name"
    );
    return comments;
  }

}

export const commentsService = new CommentsService();
