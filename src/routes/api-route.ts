import express from "express";
import {userRoutes} from "./user-route";
import { productRoutes} from "./product-route";

export const apiRoutes = express();

apiRoutes.use("/users", userRoutes)
apiRoutes.use("/products", productRoutes)

