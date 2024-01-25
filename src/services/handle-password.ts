import * as bcrypt from "bcryptjs";

const saltRound = 10

export const hashPassword = (password: string) => {
    return bcrypt.hashSync(password, saltRound)
}

export const comparePassword = (inputPass: string, hashPass: string) => {
    return bcrypt.compareSync(inputPass, hashPass)
}