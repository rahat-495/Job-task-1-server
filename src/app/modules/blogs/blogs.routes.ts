
import { Router } from "express";
import { blogControllers } from "./blogs.controllers";
import { upload } from "../../utils/sendImageToCloudinary";
import { parseTextDataToJsonData } from "./blogs.utlis";

const router = Router() ;

router.post('/create-blog' , upload.array("file" , 5) , parseTextDataToJsonData , blogControllers.createBlog) ;

export const blogRoutes = router ;
// 1828