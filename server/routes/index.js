import { createUserController, userExistMiddleware } from "../controllers/userController.js";
import { Router } from "express";
const router = Router();

router.post("/signup", userExistMiddleware, createUserController);

export { router };
