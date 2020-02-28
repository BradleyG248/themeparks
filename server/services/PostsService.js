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
  async getById(id) {
    return await dbContext.Post.findById(id);
  }
  async create(body, email) {
    return await dbContext.Post.create(body);

  }
  // async edit(id, body, email) {
  //   let post = await dbContext.Post.findById(id);
  //   // if (post["creator"] != email) {
  //   //   throw new UnAuthorized();
  //   // }
  //   post = body;
  //   await post.save();
  //   return post;
  // }
  async edit(id, update, email) {
    let post = await dbContext.Post.findByIdAndUpdate(id, update);
    // @ts-ignore
    if (post.creator != email) {
      throw new UnAuthorized();
    }
    // @ts-ignore
    post.body = update.body;
    await post.save();
    return post;
  }
}

export const postsService = new PostsService();
