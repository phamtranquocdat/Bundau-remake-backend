import { Router } from "express";
import { verifyLogined, verifyIsAdmin } from "../middlewares/verify-jwt-auth";
import { getAllProducts, createProduct } from "../controllers/product-controller";

export const productRoutes = Router()

// login permission
productRoutes.use(verifyLogined)
productRoutes.get("/",getAllProducts)

// admin permission
productRoutes.use(verifyIsAdmin)
productRoutes.post("/createProduct",createProduct)
