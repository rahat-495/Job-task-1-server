
import { Router } from "express";
import { authControllers } from "./auth.controllers";
import validateRequest from "../middlewares/validateRequest";
import { authValidations } from "./auth.validations";

const router = Router() ;

router.post('/register' , validateRequest(authValidations.registerUserValidationSchema) , authControllers.registerUser) ;
router.post('/login' , validateRequest(authValidations.loginUserValidationSchema) , authControllers.loginUser) ;

export const authRoutes = router ;
