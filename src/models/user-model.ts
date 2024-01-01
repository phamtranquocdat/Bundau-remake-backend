import {Schema, model, connect} from "mongoose"

// create interface representing a document in mongoDB
interface IUser {
    username: string;
    email: string;
    password: string;
    address?: string;
    phone?: string;
    avatarUrl?: string;
    isAdmin: boolean;
}

// create schema corresponding to the document interface
const userSchema = new Schema<IUser>({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: String, required: false, default: ""},
    phone: {type: String, required: false, default: ""},
    avatarUrl: {type: String, required: false, default: ""},
    isAdmin: {type: Boolean, required: true, default: false},
}, {timestamps: true,});

// create a Model
export const User = model<IUser>("User", userSchema)