
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { blogServices } from "./blogs.services";

const createBlog = catchAsync(async (req , res , next) => {
    const result = await blogServices.createBlogIntoDb(req.body , req.files ) ;
    if(result){
        sendResponse<object>(res , {data : result , statusCode : 200 , success : true , message : "Blog created Successfully !"}) ;
    }
})

export const blogControllers = {
    createBlog ,
}
