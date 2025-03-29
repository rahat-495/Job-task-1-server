import { Router } from "express";
import { blogRoutes } from "../modules/blogs/blogs.routes";

const router = Router() ;

const moduleRoutes = [
    {
        path : "/blogs" ,
        route : blogRoutes ,
    }
]

moduleRoutes.forEach((route) => router.use(route.path , route.route));

export default router ;
