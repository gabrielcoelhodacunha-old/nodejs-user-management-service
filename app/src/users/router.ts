import { Router } from "express";
import { usersController } from "./controller";

export const usersRouter = Router();

usersRouter.get(
  "/",
  async (req, res) => await usersController.findAll(req, res)
);
usersRouter.post(
  "/",
  async (req, res) => await usersController.create(req, res)
);
