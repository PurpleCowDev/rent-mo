"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../errors/index.js");
const checkPermissions = (requestUser, resourceUserId) => {
    if ((requestUser === null || requestUser === void 0 ? void 0 : requestUser.userId) === resourceUserId.toString()) {
        return;
    }
    throw new index_js_1.UnAuthenticatedError('Not authorized to access this resource');
};
exports.default = checkPermissions;
//# sourceMappingURL=checkPermissions.js.map