
import { z } from "zod"

const registerUserValidationSchema = z.object({
    body : z.object({
        name : z.string({required_error : "Name is required !"}) ,
        email : z.string({required_error : "Email is required !"}).email() ,
        profileImg : z.string().optional() ,
        password : z.string({required_error : "Password is required !"}) ,
    })
})

const loginUserValidationSchema = z.object({
    body : z.object({
        email : z.string({required_error : "Email is required !"}).email() ,
        password : z.string({required_error : "Password is required !"}) ,
    })
})

export const authValidations = {
    loginUserValidationSchema ,
    registerUserValidationSchema ,
}
