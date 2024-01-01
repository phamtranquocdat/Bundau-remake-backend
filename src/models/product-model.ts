import { Schema, model } from "mongoose";

interface IProduct {
    name: string;
    description?: string;
    price: string;
    imageUrl?: string;
}

const productSchema = new Schema<IProduct>({
    name: {type: String, required: true},
    description: {type: String, required: false, default: ""},
    price: {type: String, required: true},
    imageUrl: {type: String, required: false, default: ""},
}, {timestamps: true})

export const Product = model<IProduct>("Product", productSchema)