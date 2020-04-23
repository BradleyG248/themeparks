import express from "express";
import BaseController from "../utils/BaseController";
import { commentsService } from "../services/CommentsService";
import auth0Provider from "@bcwdev/auth0provider";

export class CommentsController extends BaseController {

  constructor() {
    super("api/comments");
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .put("/:id/vote", this.vote)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await commentsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async vote(req, res, next) {
    try {
      let data = await commentsService.vote(req.body, req.params.id, req.userInfo.email);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await commentsService.getById(req.params.id);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email;
      let post = await commentsService.create(req.body);
      res.send(post);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await commentsService.edit(req.params.id, req.body, req.userInfo.email);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let data = await commentsService.delete(req.params.id, req.userInfo.email);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
