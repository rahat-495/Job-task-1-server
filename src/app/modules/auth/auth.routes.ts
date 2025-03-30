
import { Router } from "express";
import { authControllers } from "./auth.controllers";

const router = Router() ;

router.post('/register-user' , authControllers.registerUser) ;

export const authRoutes = router ;
