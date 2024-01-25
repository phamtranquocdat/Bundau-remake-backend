import * as jwt from "jsonwebtoken"

export const genToken = (payload: jwt.JwtPayload) => {
    return jwt.sign(
        { user_id: payload.user_id, is_admin: payload.is_admin },
        process.env.SECRET_KEY as string,
        {
          expiresIn: "1d",
        }
      );
}