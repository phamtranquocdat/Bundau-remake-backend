import { Router } from "express";
import {getAllUsers, getOneUser, Login, Register} from "../controllers/user-controller";
import { verifyLogined, verifyIsAdmin } from "../middlewares/verify-jwt-auth";

export const userRoutes = Router();

userRoutes.post("/login", Login)
userRoutes.post("/register", Register)
// login permission
userRoutes.use(verifyLogined)
userRoutes.get("/:id", getOneUser)

// admin permission
userRoutes.use(verifyIsAdmin)
userRoutes.get("", getAllUsers)