"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersModol = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    profileImg: {
        type: String,
        required: true,
        default: "",
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.usersModol = (0, mongoose_1.model)("user", userSchema);
