import { RequestHandler } from "express";
import { Product } from "../models/product-model";

export const GetAllProducts: RequestHandler = async (req, res, next) => {
    try {
        const products = await Product.find()
        return res.status(200).json({products})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
        next(error)
    }
}

export const CreateProduct: RequestHandler = async (req, res, next) => {
    try {
        const {name, description, price, imageUrl} = req.body

        if(!(name && price)){
            return res.status(400).json({message: "Product Name and Price must be provided"})
        }

        const newProduct = new Product({
            name: name,
            description: description,
            price: price, 
            imageUrl: imageUrl
        })
        
        await newProduct.save()

        return res.status(200).json({message: "Product created successfully"})

    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
        next(error)
    }
}

export const GetOneProduct: RequestHandler = (req, res, next) => {
    try {
        res.json({mess: "Get one Product"})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
        next(error)
    }
}

export const UpdateProduct: RequestHandler = (req, res, next) => {
    try {
        res.json({mess: "Update Product"})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
        next(error)
    }
}

export const RemoveProduct: RequestHandler = (req, res, next) => {
    try {
        res.json({mess: "Remove Product"})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
        next(error)
    }
}