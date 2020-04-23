import express from "express";
import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { profilesService } from "../services/ProfilesService";
import { followersService } from "../services/FollowersService";

export class ProfilesController extends BaseController {
  constructor() {
    super("api/profile");
    this.router = express
      .Router()
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("", this.getUserProfile)
      .get("/followers", this.getFollowersByCreatorEmail)
      .get("/creators", this.getCreatorsByFollowerEmail)
      .put("/:id", this.edit);
  }

  async getFollowersByCreatorEmail(req, res, next) {
    try {
      let followers = await followersService.getFollowersByCreators(req.userInfo.email);
      res.send(followers);
    } catch (error) {
      next(error);
    }
  }
  async getCreatorsByFollowerEmail(req, res, next) {
    try {
      let creators = await followersService.getCreatorsByFollowers(req.userInfo.email);
      res.send(creators);
    } catch (error) {
      next(error);
    }
  }
  async getUserProfile(req, res, next) {
    try {
      let profile = await profilesService.getProfile(req.userInfo);
      res.send(profile);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      req.body.creatorId = req.user.sub;
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
