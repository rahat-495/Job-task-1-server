"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = require("express");
const blogs_controllers_1 = require("./blogs.controllers");
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const blogs_utlis_1 = require("./blogs.utlis");
const router = (0, express_1.Router)();
router.post('/create-blog', sendImageToCloudinary_1.upload.array("file", 5), blogs_utlis_1.parseTextDataToJsonData, blogs_controllers_1.blogControllers.createBlog);
exports.blogRoutes = router;
// 1828
