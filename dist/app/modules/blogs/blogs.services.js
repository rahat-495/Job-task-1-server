"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogServices = void 0;
const AppErrors_1 = __importDefault(require("../../errors/AppErrors"));
const auth_model_1 = require("../auth/auth.model");
const http_status_1 = __importDefault(require("http-status"));
const uuid_1 = require("uuid");
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const blogs_model_1 = require("./blogs.model");
const createBlogIntoDb = (payload, files) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const isUserAxist = yield auth_model_1.usersModol.findOne({ email: payload === null || payload === void 0 ? void 0 : payload.author.email });
    if (!isUserAxist) {
        throw new AppErrors_1.default(http_status_1.default.NOT_FOUND, "User not found !");
    }
    if (files.length) {
        const images = [];
        for (const file of files) {
            const path = file === null || file === void 0 ? void 0 : file.path;
            const imageName = `${payload === null || payload === void 0 ? void 0 : payload.title.slice(0, 6)}_${(_a = payload === null || payload === void 0 ? void 0 : payload.author) === null || _a === void 0 ? void 0 : _a.name.slice(0, 6)}_${(0, uuid_1.v4)()}`;
            const { secure_url } = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(imageName, path);
            images.push(secure_url);
        }
        payload.images = images;
    }
    const result = yield blogs_model_1.blogsModel.create(payload);
    return result;
});
exports.blogServices = {
    createBlogIntoDb,
};
