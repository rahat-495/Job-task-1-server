
import { model, Schema } from "mongoose";
import { TAuthor, TBlog } from "./blogs.interfaces";

const authorSchema = new Schema<TAuthor>({
    name : {
        type : String ,
        required : true ,
    },
    email : {
        type : String ,
        required : true ,
    },
    profilePicture : {
        type : String ,
        default : "" ,
    },
})

const blogSchema = new Schema<TBlog>({
    title : {
        type : String ,
        required : true ,
    },
    summury : {
        type : String ,
        required : true ,
    },
    author : {
        type : authorSchema ,
        required : true ,
    },
    description : {
        type : String ,
        required : true ,
    },
    tags : {
        type : [String] ,
        required : true ,
    },
    likes : {
        type : Number ,
        default : 0 ,
    },
    views : {
        type : Number ,
        default : 0 ,
    },
    publishedDate : {
        type : String ,
        required : true ,
    },
    images : {
        type : [String] ,
        default : [] ,
    },
},{
    timestamps : true ,
})

export const blogsModel = model<TBlog>("blog" , blogSchema) ;
