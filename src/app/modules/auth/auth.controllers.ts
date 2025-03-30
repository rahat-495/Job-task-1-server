
import config from "../../config";
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { authServices } from "./auth.services"

const registerUser = catchAsync(async (req , res , next) => {
    const result = await authServices.createUserIntoDb(req.body) ;
    res.cookie("refreshToken" , result.refreshtoken , { secure : config.nodeEnv === "production" , httpOnly : true , sameSite : "strict" , maxAge : 1000 * 60 * 60 * 24 * 365}) ;
    if(result){
        sendResponse<object>(res , {data : result , statusCode : 200 , success : true , message : "User Register Successfully !"}) ;
    }
})

const loginUser = catchAsync(async (req , res , next) => {
    const result = await authServices.loginUser(req.body) ;
    res.cookie("refreshToken" , result.refreshtoken , { secure : config.nodeEnv === "production" , httpOnly : true , sameSite : "strict" , maxAge : 1000 * 60 * 60 * 24 * 365}) ;
    if(result){
        sendResponse<object>(res , {data : result , statusCode : 200 , success : true , message : "User Login Successfully !"}) ;
    }
})

export const authControllers = {
    loginUser ,
    registerUser ,
}
