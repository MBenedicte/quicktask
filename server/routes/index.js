import { createUser } from "../controllers/userController.js";
import { Router } from "express";
const router = Router();

router.post("/signup", createUser);

export { router };
