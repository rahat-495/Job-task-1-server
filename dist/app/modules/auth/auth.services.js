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
exports.authServices = void 0;
const AppErrors_1 = __importDefault(require("../../errors/AppErrors"));
const http_status_1 = __importDefault(require("http-status"));
const auth_model_1 = require("./auth.model");
const auth_utils_1 = require("./auth.utils");
const config_1 = __importDefault(require("../../config"));
const createUserIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserAlreadyAxist = yield auth_model_1.usersModol.findOne({ email: payload === null || payload === void 0 ? void 0 : payload.email });
    if (isUserAlreadyAxist) {
        throw new AppErrors_1.default(http_status_1.default.CONFLICT, "User already axist !");
    }
    const user = yield auth_model_1.usersModol.create(payload);
    if (!user) {
        throw new AppErrors_1.default(http_status_1.default.BAD_REQUEST, "Some thing wen't wrong !");
    }
    const jwtPayload = { email: user === null || user === void 0 ? void 0 : user.email, name: user === null || user === void 0 ? void 0 : user.name, profileImg: user === null || user === void 0 ? void 0 : user.profileImg };
    const accesstoken = yield (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwtAccessSecret, config_1.default.jwtAccessSecretTime);
    const refreshtoken = yield (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwtRefreshSecret, "365d");
    return { accesstoken, refreshtoken };
});
exports.authServices = {
    createUserIntoDb,
};
