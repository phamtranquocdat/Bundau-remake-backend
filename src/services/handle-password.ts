import * as bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10)

export const hashPassword = (password: string) => {
    return bcrypt.hashSync(password, salt as string)
}

export const comparePassword = (inputPass: string, hashPass: string) => {
    return bcrypt.compareSync(inputPass, hashPass)
}