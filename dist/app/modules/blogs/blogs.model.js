"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsModel = void 0;
const mongoose_1 = require("mongoose");
const authorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "",
    },
});
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    summury: {
        type: String,
        required: true,
    },
    author: {
        type: authorSchema,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    views: {
        type: Number,
        default: 0,
    },
    publishedDate: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        default: [],
    },
}, {
    timestamps: true,
});
exports.blogsModel = (0, mongoose_1.model)("blog", blogSchema);
