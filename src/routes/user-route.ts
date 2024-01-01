import { Request, Response, NextFunction, Router } from "express";
import {GetAllUsers, GetOneUser, Login, Register} from "../controllers/user-controller";
import { verifyLogined, verifyIsAdmin } from "../middlewares/verify-jwt-auth";

export const userRoutes = Router();

userRoutes.post("/login", Login)
userRoutes.post("/register", Register)
userRoutes.use(verifyLogined)
userRoutes.get("", GetAllUsers)
userRoutes.get("/:id", GetOneUser)