import { RequestHandler } from "express"

export const GetAllUsers: RequestHandler = (req, res, next) => {
    res.json({mess: "Get all users"})
}

export const GetOneUser: RequestHandler = (req, res, next) => {
    res.json({mess: "Get one users"})
}

export const UpdateUser: RequestHandler = (req, res, next) => {
    res.json({mess: "Update users"})
}

export const Register: RequestHandler = (req, res, next) => {
    res.json({mess: "Register"})
}

export const Login: RequestHandler = (req, res, next) => {
    res.json({mess: "Login"})
}