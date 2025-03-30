"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidations = void 0;
const zod_1 = require("zod");
const registerUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required !" }),
        email: zod_1.z.string({ required_error: "Email is required !" }).email(),
        profileImg: zod_1.z.string().optional(),
        password: zod_1.z.string({ required_error: "Password is required !" }),
    })
});
const loginUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: "Email is required !" }).email(),
        password: zod_1.z.string({ required_error: "Password is required !" }),
    })
});
exports.authValidations = {
    loginUserValidationSchema,
    registerUserValidationSchema,
};
