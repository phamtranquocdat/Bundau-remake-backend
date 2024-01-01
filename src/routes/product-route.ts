import { Router } from "express";
import { verifyLogined, verifyIsAdmin } from "../middlewares/verify-jwt-auth";
import { GetAllProducts, CreateProduct } from "../controllers/product-controller";

export const productRoutes = Router()

// login permission
productRoutes.use(verifyLogined)
productRoutes.get("/",GetAllProducts)

// admin permission
productRoutes.use(verifyIsAdmin)
productRoutes.post("/createProduct",CreateProduct)
