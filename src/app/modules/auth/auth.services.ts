
import AppError from "../../errors/AppErrors";
import http from "http-status";
import { TLoginUser, TRegisterUser } from "./auth.interfaces";
import { usersModol } from "./auth.model";
import { createToken } from "./auth.utils";
import config from "../../config";
import bcript from "bcrypt" ;

const createUserIntoDb = async (payload : TRegisterUser) => {
    const isUserAlreadyAxist = await usersModol.findOne({email : payload?.email}) ;
    if(isUserAlreadyAxist){
        throw new AppError(http.CONFLICT , "User already axist !") ;
    }
    
    const user = await usersModol.create(payload) ;
    if(!user){
        throw new AppError(http.BAD_REQUEST , "Some thing wen't wrong !") ;
    }

    const jwtPayload = { email : user?.email , name : user?.name , profileImg : user?.profileImg } ;
    const accesstoken = await createToken(jwtPayload , config.jwtAccessSecret as string , config.jwtAccessSecretTime as string) ;
    const refreshtoken = await createToken(jwtPayload , config.jwtRefreshSecret as string , "365d") ;
    
    return { accesstoken , refreshtoken } ;
}

const loginUser = async (payload : TLoginUser) => {
    const isUserAxist = await usersModol.findOne({email : payload?.email}).select("+password") ;
    if(!isUserAxist){
        throw new AppError(http.NOT_FOUND , "User not found !") ;
    }
    
    const isPasswordMatch = await bcript.compare(payload.password , isUserAxist?.password)
    if(!isPasswordMatch){
        throw new AppError(http.UNAUTHORIZED , "Password is not match !") ;
    }

    const jwtPayload = { email : isUserAxist?.email , name : isUserAxist?.name , profileImg : isUserAxist?.profileImg } ;
    const accesstoken = await createToken(jwtPayload , config.jwtAccessSecret as string , config.jwtAccessSecretTime as string) ;
    const refreshtoken = await createToken(jwtPayload , config.jwtRefreshSecret as string , "365d") ;
    
    return { accesstoken , refreshtoken } ;
}

export const authServices = {
    loginUser ,
    createUserIntoDb ,
}
