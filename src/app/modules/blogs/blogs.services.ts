
import AppError from "../../errors/AppErrors" ;
import { usersModol } from "../auth/auth.model" ;
import { TBlog } from "./blogs.interfaces" ;
import http from "http-status" ;
import { v4 as uuidv4 } from 'uuid';
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { blogsModel } from "./blogs.model";

const createBlogIntoDb = async (payload : TBlog , files : any) => {
    const isUserAxist = await usersModol.findOne({email : payload?.author.email}) ;
    if(!isUserAxist){
        throw new AppError(http.NOT_FOUND , "User not found !") ;
    }

    if(files.length){
        const images = [] ;
        for(const file of files){
            const path = file?.path ;
            const imageName = `${payload?.title.slice(0,6)}_${payload?.author?.name.slice(0,6)}_${uuidv4()}`;
            const {secure_url} = await sendImageToCloudinary(imageName , path) as any ;
            images.push(secure_url) ;
        }
        payload.images = images ;
    }

    const result = await blogsModel.create(payload) ;
    return result ;
}

export const blogServices = {
    createBlogIntoDb ,
}
