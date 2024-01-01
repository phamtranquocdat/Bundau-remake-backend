import { CookieOptions, RequestHandler } from "express"
import { User } from "../models/user-model"
import { hashPassword, comparePassword } from "../services/handle-password";
import { GenToken } from "../services/gen-token";

export const GetAllUsers: RequestHandler = async (req, res, next) => {
    try {
        const users = await User.find().select("-password");
        return res.status(200).json({users})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
        next(error)
    }
}

export const GetOneUser: RequestHandler = (req, res, next) => {
    res.json({mess: "Get one users"})
}

export const UpdateUser: RequestHandler = (req, res, next) => {
    res.json({mess: "Update users"})
}

export const Register: RequestHandler = async (req, res, next) => {
    try {
        const { username, email, password, phone, address, isAdmin, avatarUrl } = req.body;
        if(!(username && password)){
            return res.status(400).json({message: "Username and Password must be provided"})
        }

        const userExists = await User.findOne({$or:[{username: username}, {email: email}]})
        if(userExists){
            return res.status(400).json({message: "User exists"})
        }

        const newUser = new User({
            username: username,
            email: email,
            password: hashPassword(password),
            address: address,
            phone: phone,
            isAdmin: isAdmin,
            avatarUrl: avatarUrl
        })
        
        const token = GenToken({user_id: newUser._id, is_admin: newUser.isAdmin})

        let cookieParams: CookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        };

        await newUser.save()

        return res.status(201).cookie("token",token,cookieParams).json({message: "User created", newUser: {newUser}})

    } catch (error) {
        return res.status(500).json({message:"Internal Server Error", error})
        next(error)
    }
}

export const Login: RequestHandler = async (req, res, next) => {
    try {
        const {account, password} = req.body

        if (!(account && password)) {
            return res.status(400).json({message: "Username and Password must be provided"});
        }

        const user = await User.findOne({$or:[{username: account}, {email: account}]})

        if(user && comparePassword(password, user.password)){
            let cookieParams: CookieOptions = {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
            };
            const token = GenToken({user_id: user._id, is_admin: user.isAdmin})
            const {password, ...public_info} = user.toJSON();
            return res.status(200).cookie("token",token,cookieParams).json({message: "login successfully", user: {public_info}})
        }else{
            return res.status(401).json({message: "Login fail"});
        }

    } catch (error) {
        return res.status(500).json({message:"Internal Server Error", error})
        next(error)
    }
}