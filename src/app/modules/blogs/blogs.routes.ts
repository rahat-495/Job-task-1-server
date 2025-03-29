
import { Router } from "express";
import { blogsControllers } from "./blogs.controllers";

const router = Router() ;

router.post('/create-blog' , blogsControllers.createBlog) ;

export const blogRoutes = router ;
