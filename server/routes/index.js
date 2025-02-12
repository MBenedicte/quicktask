import { createUserController, checkAndCreateUser, userSignIn} from "../controllers/userController.js";
import { Router } from "express";
const router = Router();

router.post("/signup", checkAndCreateUser, createUserController);
router.post("/signin", userSignIn);

export { router };
