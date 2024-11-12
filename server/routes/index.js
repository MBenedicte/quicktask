import { createUserController } from "../controllers/userController.js";
import { Router } from "express";
const router = Router();

router.post("/signup", createUserController);

export { router };
