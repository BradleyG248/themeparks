import { dbContext } from "../db/DbContext";
import { BadRequest, UnAuthorized } from "../utils/Errors";


class FollowersService {
  async create(body) {
    return await dbContext.Follower.create(body);
  }
  async delete(id, email) {
    let follower = await dbContext.Follower.findById(id);
    // @ts-ignore
    if (follower.followerEmail != email) {
      throw new UnAuthorized();
    }
    await dbContext.Follower.findByIdAndDelete(id);
  }
  async getFollowersByCreators(creatorEmail) {
    return await dbContext.Follower.find({ creatorEmail }).populate("follower", "name picture");
  }
  async getCreatorsByFollowers(followerEmail) {
    return await dbContext.Follower.find({ followerEmail }).populate("creator", "name picture");
  }
}

export const followersService = new FollowersService();