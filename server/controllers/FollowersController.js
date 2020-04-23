import express from "express";
import BaseController from "../utils/BaseController";
import { followersService } from "../services/FollowersService";
import auth0Provider from "@bcwdev/auth0provider";

export class FollowersController extends BaseController {

  constructor() {
    super("api/followers");
    this.router = express
      .Router()
      .use(auth0Provider.getAuthorizedUserInfo)

      // NOTE : Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post("", this.create)
      .delete("/:id", this.delete);
  }

  async create(req, res, next) {
    try {
      req.body.followerEmail = req.userInfo.email;
      let post = await followersService.create(req.body);
      res.send(post);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let data = await followersService.delete(req.params.id, req.userInfo.email);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
