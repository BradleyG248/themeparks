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
    let post = await dbContext.Post.findById(id).populate("creator", "name picture");
    return post;
  }
  async create(body, email) {
    return await dbContext.Post.create(body);

  }
  async edit(id, update, email) {
    let post = await dbContext.Post.findByIdAndUpdate(id, update, { new: true }).populate("creator", "name picture");
    // @ts-ignore
    if (post.creatorEmail != email) {
      throw new UnAuthorized();
    }
    // @ts-ignore
    return post;
  }
  async editVotes(id, data, email) {
    if (data.vote > 0) {
      data.vote = 1;
    }
    else {
      data.vote = -1;
    }
    let post = await dbContext.Post.findById(id);
    let vote = post.votes.findIndex(e => e.email == email);
    if (vote != -1) {
      post.votes[vote].value = data.vote;
    }
    else {
      post.votes.push({ email, value: data.vote });
    }
    let newPost = await dbContext.Post.findByIdAndUpdate(id, post, { new: true }).populate("creator", "name picture");
    return newPost;
  }
  async delete(id, email) {
    let post = await dbContext.Post.findByIdAndUpdate(id, { closed: true }, { new: true });
    // @ts-ignore
    if (post.creatorEmail != email) {
      throw new UnAuthorized();
    }
    await post.save();
    return post;
  }
}

export const postsService = new PostsService();
