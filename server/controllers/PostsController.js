import express from "express";
import BaseController from "../utils/BaseController";
import { postsService } from "../services/PostsService";
import auth0Provider from "@bcwdev/auth0Provider";


export class PostsController extends BaseController {
  constructor() {
    super("api/posts");
    this.router = express
      .Router()
      .get("", this.getAll)
      // .get("/:id", this.getById)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create);
    // .put("/:id", this.edit)
    // .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await postsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      req.body.creator = req.user.Info.email;
      let post = await postsService.create(req.body);
      res.send(post);
    } catch (error) {
      next(error);
    }
  }
}
