
import { model, Schema } from "mongoose";
import bcript from "bcrypt";
import { TRegisterUser } from "./auth.interfaces";
import config from "../../config";

const userSchema = new Schema<TRegisterUser>({
    name : {
        type : String ,
        required : true ,
    },
    profileImg : {
        type : String ,
        default : "" ,
    },
    email : {
        type : String ,
        required : true ,
    },
    password : {
        type : String ,
        required : true ,
        select : 0 ,
    },
},{
    timestamps : true ,
})

userSchema.pre("save" , async function(next){
    const user = this ;
    user.password = await bcript.hash(user.password , Number(config.bcryptSaltRounds)) ;
    next() ;
})

export const usersModol = model<TRegisterUser>("user" , userSchema) ;
