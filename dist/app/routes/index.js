"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogs_routes_1 = require("../modules/blogs/blogs.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/blogs",
        route: blogs_routes_1.blogRoutes,
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
