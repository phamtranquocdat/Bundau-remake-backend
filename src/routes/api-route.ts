import express from "express";
import {userRoutes} from "./user-route";

export const apiRoutes = express();

apiRoutes.use("/users", userRoutes)

