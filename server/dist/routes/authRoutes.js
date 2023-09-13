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
const express_1 = __importDefault(require("express"));
const authController_js_1 = require("../controllers/authController.js");
const passport_1 = __importDefault(require("passport"));
const User_js_1 = __importDefault(require("../models/User.js"));
const attachCookies_js_1 = __importDefault(require("../utils/attachCookies.js"));
const http_status_codes_1 = require("http-status-codes");
const auth_js_1 = __importDefault(require("../middleware/auth.js"));
const router = express_1.default.Router();
router.route('/register').post(authController_js_1.register);
router.route('/login').post(authController_js_1.login);
router.route('/updateUser').patch(auth_js_1.default, authController_js_1.updateUser);
router.route('/google').get(passport_1.default.authenticate('google', {
    scope: ['email', 'profile'],
}));
router.route('/google/redirect').get(passport_1.default.authenticate('google'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user = yield User_js_1.default.findOne({ email: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.email });
    let location = '';
    const token = user === null || user === void 0 ? void 0 : user.createJWT();
    (0, attachCookies_js_1.default)({ res, token });
    if (user) {
        user.password = ''; //don't return password to client
        location = `${user.city}, ${user.state}, ${user.country}`;
    }
    res.status(http_status_codes_1.StatusCodes.OK).redirect('/profile');
}));
router.route('/logout').get((req, res, next) => {
    res.clearCookie('token');
    res.end();
});
router.route('/current_user').get((req, res) => {
    const { user } = req;
    console.log(user);
});
exports.default = router;
//# sourceMappingURL=authRoutes.js.map