"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const auth_controllers_1 = require("./auth.controllers");
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const auth_validations_1 = require("./auth.validations");
const router = (0, express_1.Router)();
router.post('/register', (0, validateRequest_1.default)(auth_validations_1.authValidations.registerUserValidationSchema), auth_controllers_1.authControllers.registerUser);
router.post('/login', (0, validateRequest_1.default)(auth_validations_1.authValidations.loginUserValidationSchema), auth_controllers_1.authControllers.loginUser);
exports.authRoutes = router;
