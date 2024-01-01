import * as jwt from "jsonwebtoken"
import { RequestHandler, NextFunction } from "express"

export interface CustomRequest extends Request{
    user: string | jwt.JwtPayload;
}

export const verifyLogined: RequestHandler = (req, res, next) => {
    try {
        const token: string = req.cookies?.token
        if(!token){
            return res.status(403).send({message: "A token is required for authentication"})
        }
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
            (req as unknown as CustomRequest).user = decoded
            next()
        } catch (error) {
            return res.status(401).send({message: "Unauthorized. Invalid Token", token: token})
        }
    } catch (error) {
        next(error)
    }
}

export const verifyIsAdmin: RequestHandler = (req, res, next) => {
    try {
        const userDecoded: any = (req as unknown as CustomRequest).user
        if(userDecoded && userDecoded.is_admin) {
            next()
        }
        else{
            return res.status(401).send("Unauthorized. Admin required")
        }
    } catch (error) {
        next(error)
    }
}