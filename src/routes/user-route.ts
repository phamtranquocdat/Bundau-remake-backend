import { Request, Response, NextFunction, Router } from "express";
import {GetAllUsers, GetOneUser, Login, Register} from "../controllers/user-controller";

export const userRoutes = Router();

userRoutes.get("", GetAllUsers)
userRoutes.get("/:id", GetOneUser)
userRoutes.post("/login", Login)
userRoutes.post("/register", Register)