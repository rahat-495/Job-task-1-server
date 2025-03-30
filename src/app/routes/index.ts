import { Router } from "express";
import { blogRoutes } from "../modules/blogs/blogs.routes";
import { authRoutes } from "../modules/auth/auth.routes";

const router = Router() ;

const moduleRoutes = [
    {
        path : "/blogs" ,
        route : blogRoutes ,
    },
    {
        path : "/auth" ,
        route : authRoutes ,
    },
]

moduleRoutes.forEach((route) => router.use(route.path , route.route));

export default router ;
