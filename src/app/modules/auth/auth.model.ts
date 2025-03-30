
import { model, Schema } from "mongoose";
import { TRegisterUser } from "./auth.interfaces";

const userSchema = new Schema<TRegisterUser>({
    name : {
        type : String ,
        required : true ,
    },
    profileImg : {
        type : String ,
        required : true ,
        default : "" ,
    },
    email : {
        type : String ,
        required : true ,
    },
    password : {
        type : String ,
        required : true ,
    },
},{
    timestamps : true ,
})

export const usersModol = model<TRegisterUser>("user" , userSchema) ;
