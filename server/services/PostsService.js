import { dbContext } from "../db/DbContext";
import { BadRequest, UnAuthorized } from "../utils/Errors";



class PostsService {

  async getAll(query = {}) {
    let posts = await dbContext.Post.find(query).populate(
      "creator",
      "name picture"
    );
    return posts;
  }
  async create(body, email) {
    return await dbContext.Post.create(body);

  }

}

export const postsService = new PostsService();
