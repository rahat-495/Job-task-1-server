"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = require("express");
const blogs_controllers_1 = require("./blogs.controllers");
const router = (0, express_1.Router)();
router.post('/create-blog', blogs_controllers_1.blogsControllers.createBlog);
exports.blogRoutes = router;
