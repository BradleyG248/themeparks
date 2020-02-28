import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PostsService {
  async findAll(query = {}) {
    let posts = await dbContext.Post.find(query).populate(
      "creator",
      "name picture"
    );
    return posts;
  }

}

export const valuesService = new PostsService();
