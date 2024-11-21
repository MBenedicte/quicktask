import { createUserController, checkAndCreateUser } from "../controllers/userController.js";
import { Router } from "express";
const router = Router();

router.post("/signup", checkAndCreateUser, createUserController);

export { router };
