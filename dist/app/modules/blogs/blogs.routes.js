"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/create-blog');
exports.blogRoutes = router;
